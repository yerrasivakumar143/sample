import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const  Login =() => {
 const navigate = useNavigate();
  const [data,setData] =useState({        
     gmail:'',
     password:'',
     default:'',
    })
    const {gmail,password}=data;
    const changeHandler = e =>{
      setData({...data,[e.target.name]:e.target.value})
     
    }
    
    const hadleSubmit = e =>{
      e.preventDefault();
      // console.log(data);
      axios.post("http://localhost:9000/login",{
        username:gmail,
        newpassword:password,
      })
      .then(response=>{alert(response.data.message)
        
        if(response.data.message === 'login successful!'){
          console.log(response.data.token)
          localStorage.setItem('token',response.data.token)
          navigate("/dashboard")
    }
    })
   .catch(errors =>{
        if(errors.data.message === "no user found!"){
          console.log("error occur");
        navigate("/");
           }
        })
      }
      
      
  const handleSubmit2 = () => {
      navigate("/");    
  }
  return (
    <div>
       <div className="App">
      <div className="container">
      <div className="card">
      <form  onSubmit={hadleSubmit} >
        <div>
      <label>Gmail: </label>
      <input type="gmail" name='gmail'  value={gmail} placeholder='gmail' onChange={changeHandler} required/>
      </div>
      <div>
      <label>Password:</label>
          <input type="password" name='password' value={password} placeholder='password' onChange={changeHandler} required/></div>
      <div>
          <button className="button">Submit</button>
          </div>
          <div>

          <button  className="button" onClick={handleSubmit2}> Registration</button>
          </div>
          </form>
          </div>
          </div>
        </div>
      </div>
  );
  }

export default Login;