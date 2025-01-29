import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import Footerend from '../items/Footerend'
function Footer() {
  return (
    <div className='footer-comp px-lg-5 px-3'>
      <footer className='footer px-lg-5'>
<div className="container-fluid ">     
    <div className="d-flex row-gap-5 flex-wrap text-capitalize text-white pt-5">
        <div className="col-lg-4 col-md-6 col-12 footer-link">
            <h4 className='footer-title'>links</h4>
            <ul className='list-group pt-4'>
            <li><NavLink to="/">homepage</NavLink></li>
            <li><NavLink to="/services">our services</NavLink></li>
            <li><NavLink to="/ourworks">our works</NavLink></li>
            <li><NavLink to="/about">about us</NavLink></li>
            <li><NavLink to="/careers">careers</NavLink></li>
            <li><NavLink to="/contact">contact us</NavLink></li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 footer-link">
        <h4 className='footer-title'>Connect</h4>
        <ul className='list-group pt-4'>
            <li><a href="#">b corp</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">linkedin</a></li>
            <li><a href="#">design declares</a></li>
            <li><a href="#">contact</a></li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 footer-link">
        <h4 className='footer-title'>Places</h4>
        <ul className='list-group pt-4 places'>
            <li>Sydney (HQ)</li>
            <li>Sydney (HQ)</li>
            <li>Sydney (HQ)</li>
            </ul>
        </div>
    </div>
</div>
      </footer>
      <Footerend/>
    </div>
  )
}

export default Footer
