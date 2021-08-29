import React,{useState} from "react";
import { loginAdmin } from "../../../../service/admin-service";


const FormsTemporary = () => {   
    const [adminEmail,setAdminEmail]=useState("")
    const [adminPassword,setAdminPassword]=useState("")

    const saveInfoEmail =(e)=>{
        setAdminEmail(e.target.value)
        console.log(adminEmail);
    }

    const saveInfoPassword =(e)=>{
        setAdminPassword(e.target.value)
        console.log(adminPassword);
    }

    const userAdmin={
        user:{
            email:adminEmail,
            password:adminPassword
        }
    }

  return (
    <>
      <div>
        <h1>Email:</h1>
        <input type="email" onChange={saveInfoEmail}  required/>
        <h1>Password</h1>
        <input onChange={saveInfoPassword}  required/>
        <button onClick={()=>{loginAdmin(userAdmin)}}>Login</button>
      </div>
    </>
  );
};

export default FormsTemporary;