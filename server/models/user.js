
const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
     mobile:{
          type:String,
          unique:true,
          required:true
    }
})

// const user= mongoose.model('user', userSchema);
// export default user;

module.exports =mongoose.model("suer", userSchema);