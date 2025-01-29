import React from 'react'
// import video from '../src/assets/video/Curator_Banner.mp4'
import './css/main.css'
import Aboutitem from '../components/items/Aboutitem'
import Clients from '../components/items/Clients'
import Portfolio from '../components/items/Portfolio'
import Services from '../components/items/Services'
import Workmodes from '../components/items/Workmodes'
import Founder from '../components/items/Founder'
import Chatform from '../components/forms/Chatform'
import Certified from '../components/items/Certified'
function Index() {
  return (
    <>
        <div className="container-fluid index-page px-0">
         
        <div className="container-fluid hero-section px-0 d-flex flex-column align-items-center justify-content-center text-center gap-5">
          {/* baxkground video  */}
            <video autoPlay loop muted className="background-video">
                <source src="/public/assets/video/Curator_Banner.mp4" type='video/mp4'/>
            </video>
          <div className='container main-heading text-capitalize text-center'>
            <h1 className='display-1 text-white'>unleashing limitless imagination</h1>
            <h2 className='mt-5 col-md-7 mx-auto '>From strategy to execution, we deliver transformative designs, campaigns ans experiences tailored for growth.</h2>
            </div>
            {/* scroll down gif */}
         <div className='scroll-gif'>
          <a href="#about-item">
          <img src="/public/assets/images/ScrolDown.gif" alt="scroll" width={70} className='img-fluid'/></a>
         </div>
        </div>
        <Clients/>
        <Aboutitem/>
        <Portfolio/>
        <Services/>
        <Workmodes/>
        <Founder/>
        <Chatform/>
        <Certified/>
    </div>
  </>
  )
}

export default Index
