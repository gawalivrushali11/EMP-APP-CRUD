
import { useParams } from 'react-router-dom'

import React, { useState,useEffect } from 'react'
import EmpService from '../Service/EmpService';
import { Link } from 'react-router-dom';
import '../CSS/main.css';

const Search = () => {

    const [empList,setEmpList]=useState([]);
    const [msg,setMessage]=useState();

    useEffect(()=>{
            init();
    },[])



    const init=()=>
    {
        EmpService.getAllEmp()
        .then((res)=>
            {//console.log("response",res.data);
            setEmpList(res.data);
           console.log(empList)
            }
            )
        .catch((error)=>
            {console.log("Error.in loading")})

    }

   

    const deleteEmp=(id)=>
    {
        EmpService.deleteEmp(id)
        .then((res)=>{
            console.log("response",res.data);
        setMessage("Employee is Successfully deleted."+id)
        init();   //To display updated Values
        }
        )
        .catch((error)=>console.log("Error in deletion"))

    }

    const {searchquery}=useParams();
    console.log("Searching for",searchquery)
    const sq=searchquery.toLowerCase()
    console.log("Searching for",sq)

 const filterEmpList=empList.filter((em)=>em.firstName.toLowerCase()===sq || em.lastName.toLowerCase()===sq ||`${em.firstName.toLowerCase()} ${em.lastName.toLowerCase()}`===sq || em.empId===parseInt(sq) || em.salary>parseInt(sq))
 console.log("Filter",filterEmpList)


  return (
    <>
    {
    console.log(empList)}
    <div className="container-fluid">
        <div className='row' >
            <div className='col-md-6 offset-md-1'>
            <div className="card ext-left" >
            <div className="card-header">
                Search Employee
                {
                    msg &&
                    <p className='fs-4 text-center text-success'>{msg}</p>
                }
            </div>
                <div className="card-body">

                <table className="table table-hover">
                <thead>
                        <tr >
                        <th>Sr.No.</th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th >Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterEmpList.length===0?(
                            <p>Record Not Found</p>):
                            filterEmpList.map((em,num)=>(

                        <tr key={num+1}>
                        <td>{num+1}</td>
                        <td>{em.empId}</td>
                        <td>{em.firstName}</td>
                        <td>{em.lastName}</td>
                        <td>{em.email}</td>
                        <td>{em.address}</td>
                        <td>{em.salary}</td>
                        <td>{em.phone}</td>

                        <td>
                        <span>
                            <Link to={'/updateEmployee/'+em.empId} className="btn btn-sm btn-success" >Edit</Link>

                            <button onClick={()=>{console.log(em.empId);deleteEmp(em.empId)}} className="btn btn-sm btn-danger ms-1" >Delete</button>
                            </span>
                            </td>
                            </tr>

                        )


                        )}


                    </tbody>
                    </table>

                </div>
            </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Search