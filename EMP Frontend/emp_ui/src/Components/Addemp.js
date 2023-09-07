import React from 'react'
//import '../CSS/main.css';
import { useState } from 'react';
import EmpService from '../Service/EmpService';

const Addemp = () => {
  const [emp,setEmp]=useState({
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      address:'',
      salary:'',
    })

  const [msg,setMessage]=useState();

 const handleChange=(e)=>
 {
        e.preventDefault();
        console.log("From handle change");
        const {id,value}=e.target;
        // console.log(value);
        setEmp({...emp,[id]:value})
 }


const empRegister=(e)=>
{
    // e.preventDefault();
    console.log(emp);

    EmpService.saveEmp(emp)
    .then((res)=>{console.log("Employee Added Successfully");setMessage("Employee Added Successfully")})
    .catch((error)=>{console.log("Error/saveEmp")});

}




  return (
    <>
    <div className="container">
        <div className='row'  style={{"width":"100%" }} >
            <div className='col-md-6 offset-md-3'>
            <div className="card " style={{"width":"100%" ,"justifyContent": "center", "alignItems": "center"}}>
            <div className="card-header" style={{"margin-top": "10px"}}>
                Add Employee
            </div>
            {
                msg &&
                <p className='fa-4 text-center text-success'>{msg}</p>
            }

                <div className="card-body" style={{"width":"90%"}}>
                <form onSubmit={(e)=>empRegister(e)}>
                <div className="form-group ">
                        <label for="firstName" >Enter Employee First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="firstname"
                        onChange={(e)=>handleChange(e)}
                      />

                    </div>

                    <div className="form-group">
                        <label for="lastName">Enter Employee Last Name </label>
                        <input type="text" className="form-control" id="lastName" placeholder="lastname"
                        onChange={(e)=>handleChange(e)}
                       />
                    </div>
                    <div className="form-group">
                        <label for="email">Enter Email </label>
                        <input type="text" className="form-control" id="email" placeholder="email"
                        onChange={(e)=>handleChange(e)}
                       />
                    </div>

                    <div className="form-group">
                        <label for="address">Enter Address </label>
                        <input type="text" className="form-control" id="address" placeholder="address"
                        onChange={(e)=>handleChange(e)}
                      />
                    </div>

                    <div className="form-group">
                        <label for="phone">Enter phone no </label>
                        <input type="text" className="form-control" id="phone" placeholder="phone no"
                        onChange={(e)=>handleChange(e)}
                       />
                    </div>

                    <div className="form-group">
                        <label for="salary">Enter salary </label>
                        <input type="text" className="form-control" id="salary" placeholder="salary"
                        onChange={(e)=>handleChange(e)}
                         />
                    </div>

                    <br/><br/>

                    <button type="submit" className="btn btn-primary btn-lg submit" style={{"margin-top": "0px"}} data-toggle="button" >
                        Submit
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

export default Addemp