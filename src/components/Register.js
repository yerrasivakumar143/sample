import React  from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const  From=()=> {
const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
 
  const onSubmit = (data) => {
    axios.post("http://localhost:9000/create", data)
    .then(response=>{alert(response.data.message)
      if(response.data.message==='person data added success'){
        navigate("/login")
        console.log(data);
      }
    })
    .catch(errors =>{alert(errors.data.message)
    if(errors.data.message==="error occur"){
      console.log("error occur");
    navigate("/");
       }
    })
    };
   return (
    <div>
      <div className="App">
      <div className="container">
           <div className="card">
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registration</h1>
        </div>
        <div>
          <label>First Name</label>
          <input
            placeholder="Enter first name"
            {...register("fname", { required: true })}
          />
          <error>
            {errors.fname?.type === "required" && "First ame is required"}
          </error>
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="Enter last name"
            {...register("lname", { required: true })}
          />
          <error>
            {errors.lname?.type === "required" && "Last name is required"}
          </error>
        </div>
        <div>
          <label>User Name</label>
          <input
            placeholder="Enter user name"
            {...register("username", { required: true })}
          />
          <error>
            {errors.username?.type === "required" && "User name is required"}
          </error>
        </div>
        <div>
          <label>AGE</label>
          <input
            placeholder="enter your age"
            {...register("age", {
            minLength: 2,
            })}
          />
          <error>
          {errors.age?.type === "minLength" &&
              "Age must and should be 17 above "}
            
          </error>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter primary email"
            {...register("gmail", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.gmail?.type === "required" && "Email is required"}
            {errors.gmail?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div>
          <label>New Password</label>
          <input
            placeholder="Enter password"
            {...register("newpassword", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <error>
            {errors.newpassword?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.newpassword?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="num" {...register("phonenumber", {})} />
          <error>
            {errors.phonenumber?.type === "required" &&
              "enter a your phone number"}
          </error>
        </div>
        <div>
          <label>Date of birth</label>
          <input
            placeholder="Enter your dob"
            {...register("dob", { required: true })}
          />
          <error>
            {errors.dob?.type === "required" && "User dob is required"}
          </error>
        </div>
        <div>
          <label>Department</label>
          <input
            placeholder="Enter department name"
            {...register("department", { required: true })}
          />
          <error>
            {errors.department?.type === "required" &&
              " department is required"}
          </error>
        </div>

        <div>
          <label>Designation</label>
          <input
            placeholder="Enter designation name"
            {...register("designation", { required: true })}
          />
          <error>
            {errors.designation?.type === "required" &&
              "designation is required"}
          </error>
        </div>
        <div>
          <label>Address</label>
          <input
            placeholder="Enter your address"
            {...register("addrss", { required: true })}
          />
          <error>
            {errors.addrss?.type === "required" && "Address is required"}
          </error>
        </div>

        <div>
          <label>Employee Number</label>
          <input
            type="numbers"
            {...register("employeenumber", {
              maxLength: 6,
            })}
          />
          <error>
            {errors.employeenumber?.type === "maxLength" &&
              "Entered number is more than 6 digits"}
          </error>
        </div>

        <div>
          <label>Emirides Id</label>
          <input
            type="numb"
            {...register("emiridesid", {
              maxLength: 4,
            })}
          />
          <error>
            {errors.emiridesid?.type === "maxLength" &&
              "Entered number is more than 4 digits"}
          </error>
        </div>
        <div>
          <label>Id</label>
          <input
            type="id"
            {...register("id", {
              maxLength: 4,
            })}
          />
          <error>
            {errors.id?.type === "maxLength" &&
              "Entered number is more than 4 digits"}
          </error>
        </div>

        <div>
          <input className="button" type="submit" />
        </div>
        {/* <div>
          <button className="button" onClick={handleSubmit2} >Login</button>
        </div> */}
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}
export default From;
