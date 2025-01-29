import React from 'react'
import './css/main.css'
import { NavLink } from 'react-router-dom'
import { HiArrowLongLeft } from "react-icons/hi2";
function Errorpage() {
  return (
    <>
    <div className='error-main container-fluid text-center'>
     <h1><span className='text-danger'>404</span> - Page Not Found</h1>
     <p>Sorry, the page you are looking for could not be found.</p>
    <NavLink to="/" className="text-white"><HiArrowLongLeft />back to homepage</NavLink>
    </div>
    </>
  )
}

export default Errorpage
