import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
export default function Dashboard (){
  // const [search,setSearch] = useState('')
    const [users, setUsers] = useState([])

    const fetchData = async () =>{
     const response = await fetch("http://localhost:9000/users")
    const  data = await  response.json()
    setUsers(data)
    }
    useEffect(()=>{
    fetchData()
  },[])
    
 
    const navigate = useNavigate();
    const handleSubmit2 =()=>{
      localStorage.removeItem('token')
        alert("user as a logout")
        navigate("/login")
    }
   

    return(

        <div>
        <center>
            <h1> welocme to Dashboard</h1>
            {/* <div>
            <input type="search" name='' value={search}  ></input>
            </div> */}
            <div>
          <button style={{marginLeft:"80%",marginTop:"-35%"}} className="button" onClick={handleSubmit2} >Logout</button>
        </div> 
            <table className='table' style={{width:"100px"}}>
      {/* <button style={{textAlign:"center",marginLeft:"90px",marginTop:"100px"}} onClick={fetchData}> fetch data</button> */}
      <thead>
<tr>
<th>NAME</th>
<th>LastName</th> 
<th>UserName</th>
<th>AGE</th>
<th>Email</th>
{/* <th>NewPassword</th> */}
<th>PhoneNumber</th>
{/* <th>Dob</th> */}
<th>Department</th>
<th>Designation</th>
<th>Address</th>
<th>Employee Number</th>
<th>Emirides Id</th>
{/* <th>Id</th> */}
</tr>               
</thead>
    <tbody className='table'>
      <tr>
     <td>{users.map(name=>(<p>{name.fname}</p>))}</td>
     <td>{users.map(name=>(<p>{name.lname}</p>))}</td>
     <td>{users.map(name=>(<p>{name.username}</p>))}</td>
     <td>{users.map(name=>(<p>{name.age}</p>))}</td>
     <td>{users.map(name=>(<p>{name.gmail}</p>))}</td>
     <td>{users.map(name=>(<p>{name.phonenumber}</p>))}</td>
     {/* <td>{users.map(name=>(<p>{name.dob}</p>))}</td> */}
     <td>{users.map(name=>(<p>{name.department}</p>))}</td>
     <td>{users.map(name=>(<p>{name.designation}</p>))}</td>
     <td>{users.map(name=>(<p>{name.addrss}</p>))}</td>
     <td>{users.map(name=>(<p>{name.employeenumber}</p>))}</td>
     <td>{users.map(name=>(<p>{name.emiridesid}</p>))}</td>
     </tr>
   </tbody>
    </table>
        
        </center>
        </div>
    


)}
