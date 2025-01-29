import React from 'react'
import './css/item.css'
import { NavLink } from 'react-router-dom'
function Footerend() {
  return (
    <div className='footerend'>
      <div className="container-fluid  end-div px-md-5 py-3">
      <ul className='text-capitalize end-div-ul'>
            <li><NavLink className="nav-link" to="/">brand guideline</NavLink></li>
            <li><NavLink className="nav-link" to="/graphic">graphic design</NavLink></li>
            <li><NavLink className="nav-link" to="/webdesign">web design</NavLink></li>
            <li><NavLink className="nav-link" to="/webdevelopment">web development</NavLink></li>
            <li><NavLink className="nav-link" to="/ux_ui">ux/ui design</NavLink></li>
            <li><NavLink className="nav-link"to="/productdesign">product design</NavLink></li>
            <li><NavLink className="nav-link" to="/digitalmarket">digital marketing</NavLink></li>
            <li><NavLink className="nav-link" to="/appdeve">app development</NavLink></li>
            </ul>
      </div>
    </div>
  )
}

export default Footerend
