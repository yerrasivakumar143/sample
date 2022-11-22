

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Home from './components/Register'
import Login from './components/Login'
import './App.css'
import Dashboard from "./components/Dashboard";

const App = () =>{
    return (
      <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
       
   );
  }

 
export default App;