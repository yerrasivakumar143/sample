import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/Home">Home</Link>
    </li>
    
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Logout">Logout</Link>
    </li>
  </div>
  );
}
export default  Navbar;