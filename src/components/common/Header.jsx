import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu,BiX } from "react-icons/bi";
import './header.css'

function Header() {

const[navbar, setNavbar]=useState(false)
const changeBackground =()=>{
  if(window.scrollY>=30){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}
window.addEventListener('scroll',changeBackground);
  return (
    <div className='header-comp'>
      <header className='header'>
      <nav className={navbar ? 'navbar navbar-expand-lg fixed-top navbar-black':'navbar navbar-expand-lg fixed-top'}>
                <div className="container-fluid justify-content-start  px-md-3" >
                  {/* curator logo  */}
                    <NavLink className="navbar-brand col-lg-2 text-end" to="/">
                        <img src="/public/assets/images/Curator_Logo.png" alt="logo" width={160} className="img-fluid"/>
                       </NavLink>
                  <div className="offcanvas offcanvas-end bg-black color-white" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                    <img src="/public/assets/images/Curator_logo.png" alt="logo" width={130} className="img-fluid"/>
                      <button type="button" className="btn text-white shadow-none border-0 ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"><BiX size={30} /></button>
                    </div>
                    <div className="offcanvas-body col-12">
                      <ul className="navbar-nav main-nav justify-content-center align-self-center flex-grow-1">
                        <li className="nav-item">
                          <NavLink className="nav-link mission" to="/" aria-current="page" ><span>mission</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link services" to="services" aria-current="page" ><span>Steller solutions</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link ourwork" to="ourwork" aria-current="page" ><span>orbit portfolio</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link about" to="aboutus" aria-current="page" ><span>our galaxy</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link careers" to="career" aria-current="page" ><span>infinite careers</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link contact" to="contactus" aria-current="page" ><span>dock with us</span></NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                      <div className='navbar-brand rocket col-2 ms-3 me-0'>
                        <img src="/public/assets/images/Curator_Launch_Rocket.png" alt="logo" width={40} className="img-fluid rocket-img"/>
                       <span className="text-white text-uppercase launch-text "> let's launch</span>
                       </div>
                       {/* offcanvas target button  */}
                       <button className="navbar-toggler shadow-none border-0 ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className='text-white'><BiMenu size={30} /></span>
                      </button>
                </div>
              </nav>
              </header>
    </div>
  )
}

export default Header
