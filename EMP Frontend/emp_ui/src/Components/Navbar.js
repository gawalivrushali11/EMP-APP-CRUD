import React from 'react'
import {Link} from 'react-router-dom'
import { useState} from 'react'
const Navbar = () => {
  const [searchquery,setSearchQuery]=useState()


  console.log("Search",searchquery)
  const handleChange=(e)=>
  {
    setSearchQuery(e.target.value)

  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Employee Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="addEmployee" className="nav-link" href="#">Add Employee</Link>
        </li>
      
        
      </ul>
      <form className="d-flex">
      <div className='container' style={{ align: 'right' }}>
      <div className="row" style={{ align: 'right' }}>
      <div className="col-sm-8">
        <input type="text" onChange={(e)=>handleChange(e)} value={searchquery} className="form-control" style={{marginLeft:'2px',marginBottom:'3%', width:'100%' }}placeholder="Id,Firstname,Lastname or Fullname" />
      </div>
      <div className="col-sm-3">
        <Link to={'/searchbyquery/'+searchquery} className="btn btn-primary" >Search</Link>

      </div>
    </div>

      </div>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar