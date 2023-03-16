import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./styles/css/lform.css";
import axios from "axios";


const URL="http://localhost:5000"

function Lform() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [cPass, setCPass] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();

   if(cPass!=password){
    alert('Password do not match')
   }

   else{
    const data={name,email,password,mobile};
    try{
      console.log("data is ", data)
      const res= await axios.post(`${URL}/signup`,data);
      console.log("data2222 is ", data)      
        console.log("response from backend is ",res);
        // return res;
        if(res){

          console.log("res from back is ", res);
          alert("Registeration is successful")
          navigate('/roleSelectionPage')
    
        }
        else{
          alert("Something went wrong plese try after some time")
        }
    }
    catch(error){
      console.log("Error while calling signup api ", error.message)
    }
    console.log("data2222 is ", data)
      
  
  }
  
    // console.log('Name:', name);
    // console.log('Mobile:', mobile);
    // console.log('Email:', email);
    // console.log('Role:', role);
  //  / navigate('/roleSelectionPage')

   }
  // };






  return (
    <div className="registration-form">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

<label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
         <label htmlFor="cPass">Confirm Password:</label>
        <input
          type="password"
          id="cPass"
          value={cPass}
          onChange={(event) => setCPass(event.target.value)}
        />



        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Lform;
