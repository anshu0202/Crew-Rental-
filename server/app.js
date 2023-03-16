require("dotenv").config();
const express = require('express');
const User = require('./models/user.js')
const cors = require('cors');

const app = express();

const connectDB = require('./db/connect');


const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get('/', (req, res) => {
    res.send('Hi I am Live!');
});

app.use(cors());
app.use("/api/products" , products_routes);




app.post("/signup",async(req,res)=>{

    try{

        console.log("data from frontyend is ", req.body);        
        const exist= await User.findOne({email:req.body.email});
        if(exist){
            return res.status(401).json({message:'Email already exists'});
        }
        const user=req.body;
        console.log("user is ",user);
        const newUser= new User(user);
        await newUser.save();
        res.status(200).json({message:user});
    }
    catch(error){
        console.log("error while registeration ", error.message)
        res.status(500).json({message:error.message});
    }     

})


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();

