import React, { useEffect } from "react";
import "./css/item.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Aboutitem() {
  useEffect(() => {
    Aos.init({
      once: false,  
    });
  }, []);
  return (
    <>
      <div className="about-item" id="about-item">
        <div className="container-fluid about-hero px-3">
          {/* baxkground video  */}
          <video autoPlay loop muted className="mars-background-video">
            <source src="/public/assets/video/mars1.mp4" type="video/mp4" />
          </video>
          {/* content  */}
          <div className="row gap-lg-5 row-gap-3 about-content ">
            <div className="text-capitalize text-start left-section offset-lg-2 col-lg-4 col-md-6">
                <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">Where </h4> 
                <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">Innovation, </h4> 
                <h4 className="color1 display-1 mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">Meets </h4>
                <h4 className="color1 display-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">Imagination</h4>
            </div>
            <div className="right-section text-white text-start  col-lg-4 col-md-6"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" >
              <p className="fs-5">
                We’re a creative agency that blends innovation with scalability,
                crafting tailored strategies and designs for startups, SMEs, and
                enterprises.
              </p>
              <p className="fs-5">
                Our solutions grow with your business, delivering lasting impact
                in a dynamic digital world.
              </p>
              <div className="aboutbtn rounded-pill">
                <NavLink to="/k" className="text-decoration-none">
                  <button className="btn about-btn border-0 text-uppercase">
                 unveil the galaxy  
                  </button>
                </NavLink>
              </div>
            </div>
          
          <div className="row text-white col-lg-4 offset-lg-2 text-center text-capitalize">
            <div className="col-4">
              <h4 className="display-3">160<sup>+</sup></h4>
              <p className="col-lg-10 lh-1">successful projects</p>
              </div>
            <div className="col-4">
              <h4 className="display-3">50<sup>+</sup></h4>
              <p className="col-lg-10 lh-1">happy clients</p>
              </div>
            <div className="col-4">
              <h4 className="display-3">22<sup>+</sup></h4>
              <p className="col-lg-10 lh-1">total crew members</p>
              </div>
        </div>
        </div>
          </div>
      </div>
    </>
  );
}

export default Aboutitem;
