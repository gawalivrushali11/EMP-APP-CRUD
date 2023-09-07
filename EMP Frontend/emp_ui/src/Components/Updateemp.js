import React, { useEffect } from 'react'
//import '../CSS/main.css';
import { useState } from 'react';
import EmpService from '../Service/EmpService';
import { useNavigate, useParams } from 'react-router-dom';

const Updateemp = () => {
  const [emp,setEmp]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:'',
    salary:''
  })
  const [msg,setMessage]=useState();

  const {id}=useParams();  //To get parameters
  console.log(id)

 useEffect(()=>{
    EmpService.getEmpById(id)
    .then((res=>{setEmp(res.data)}))
    .catch((error)=>console.log("Error in editing"))
 },[])

 console.log("emp use",emp);


 const handleChange=(e)=>
 {
        const value=e.target.value;
        console.log(value);
        setEmp({...emp,[e.target.id]:value})
 }

const navigate=useNavigate();
console.log("Employee",emp)

 const empUpdate=(e)=>
{
    e.preventDefault();
    console.log("update",emp);

    EmpService.editEmp(emp)
    .then((res)=>{setMessage("Employee is successfully updated");console.log("Employee updated Successfully")})   //Navigate to home on successful updation
    .catch((error)=>{console.log("Error in update Employee")});

}


  return (
    <>
    <div className="container">
    <div className='row'  style={{"width":"100%" }} >
            <div className='col-md-6 offset-md-3'>
            <div className="card " style={{"width":"100%" ,"justifyContent": "center", "alignItems": "center"}}>
            <div className="card-header" style={{"margin-top": "10px"}}>
            Employee update
                {
                    msg &&
                    <p className='fs-4 text-center text-success'>{msg}</p>
                }
            </div>


                <div className="card-body" style={{"width":"90%"}}>
                <form onSubmit={(e)=>empUpdate(e)}>
                <div className="form-group ">
                        <label htmlFor="firstName" >Enter Employee First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="firstname"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.firstName}
                      />

                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Enter Employee Last Name </label>
                        <input type="text" className="form-control" id="lastName" placeholder="lastname"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.lastName}
                       />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter Email </label>
                        <input type="text" className="form-control" id="email" placeholder="email"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.email}
                       />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Enter Address </label>
                        <input type="text" className="form-control" id="address" placeholder="address"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.address}
                      />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Enter phone no </label>
                        <input type="text" className="form-control" id="phone" placeholder="phone no"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.phone}
                       />
                    </div>

                    <div className="form-group">
                        <label htmlFor='salary'>Enter salary </label>
                        <input type="text" className="form-control" id="salary" placeholder="salary"
                        onChange={(e)=>handleChange(e)}
                        defaultValue={emp.salary}
                         />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg submit" data-toggle="button" >
                        Update
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Updateemp