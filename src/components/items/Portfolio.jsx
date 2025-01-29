import React, { useEffect } from "react";
import "./css/item.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Portfoliocard from "./Portfoliocard";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      once: false,  
    });
  }, []);
  return (
    <>
      <div className="portfolio-container container-fluid  px-3 pb-5">
        {/* top heading  */}
        <div className="row gap-lg-5 row-gap-5">
          <div className="text-capitalize text-start left-section offset-lg-2 col-lg-4 col-md-6">
            {/* <h1 className="display-1 text-white">
              passionate about craft.
              <span className="color1"> driven by impact.</span>
            </h1> */}
               <h4 className="display-1 text-black mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">passionate</h4> 
                <h4 className="display-1 text-black mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">about craft.</h4> 
                <h4 className="color1 display-1 mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">driven by</h4>
                <h4 className="color1 display-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">impact.</h4>
          </div>
          <div className="right-section text-black text-start col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
            <p className="fs-5">
              Our work is intuitive, aesthetic, and functional, designed to
              engage audiences, boost sales, and elevate your brand.
            </p>
          </div>
        </div>
        {/* card section  */}
        <div className="container-fluid px-3 portfolio-mid">
          {/* flex */}
          <div className="all-card row gx-3 row-gap-5 pt-5 flex-nowrap overflow-scroll">
            {/*pernoid richard card */}
            <div className="col-md-3">
              <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div class="img_area overflow-hidden">
                <img
                  src="/public/assets/images/Pernod.webp"
                  alt="image"
                  class="img-fluid  w-100"
                />
                <div className="description">
                  <p className="text-black mb-0  bg-white px-4 py-2 rounded-pill text-uppercase">Cocktail App</p>
                </div>
              </div>
              <div class="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">pernod richard</h4>
                <div className="workdetail">
                <p>Strategy</p>
                <p>Brand Guide</p>
                <p>UI/UX</p>
                <p>App Development</p>
                </div>
              </div>
            </div>
              </NavLink>
              {/* <Portfoliocard image="/public/assets/images/Pernod.webp" cate="Cocktail App" title="pernod richard" discription="Strategy"/> */}
            </div>
             {/*blysk card */}
             <div className="col-md-3">
              <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div class="img_area overflow-hidden">
                <img
                  src="/public/assets/images/Blyskjewels.webp"
                  alt="image"
                  class="img-fluid  w-100"
                />
                <div className="description">
                  <p className="text-black mb-0 text-uppercase bg-white px-4 py-2 rounded-pill">ecommerce</p>
                </div>
              </div>
              <div class="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">blysk jewels</h4>
                <div className="workdetail">
                <p>Naming</p>
                <p>Brand Guide</p>
                <p>Website Design</p>
                <p>Ecommerce</p>
                <p>Product Shoots</p>
                <p>Digital Marketing</p>
                </div>
              </div>
            </div>
              </NavLink>
            </div>
             {/*Discovery wines card */}
             <div className="col-md-3">
              <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div class="img_area overflow-hidden">
                <img
                  src="/public/assets/images/DiscoveryWines.webp"
                  alt="image"
                  class="img-fluid w-100"
                />
                <div className="description d-flex gap-2 text-center">
                  <p className="text-black mb-0 bg-white px-4 py-2 rounded-pill text-uppercase">digital marketing</p>
                  <p className="text-black mb-0 bg-white px-4 py-2 rounded-pill text-uppercase">in-store creative</p>
                </div>
              </div>
              <div class="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">Discovery Wines</h4>
                <div className="workdetail">
                <p>in-Store Promotion</p>
                <p>Digitalized Store</p>
                <p>Digital Marketing</p>
                <p>Seasonal Campaign</p>
                </div>
              </div>
            </div>
              </NavLink>
            </div>
             {/*veermanpreet card */}
             <div className="col-md-3">
              <NavLink to="" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div class="video_area overflow-hidden">
                <video muted autoPlay loop src="/public/assets/video/Veermanpreet.mp4" type="video/mp4" class="object-fit-cover"/>
                
                <div className="description">
                  <p className="text-black bg-white px-4 py-2 rounded-pill mb-0 text-uppercase">youtube content</p>
                </div>
              </div>
              <div class="card-body text-capitalize text-black pt-3">
                <h4 className="project-name">Veer Manpreet (UK)</h4>
                <div className="workdetail">
                <p>Video Production</p>
                <p>Video Editing</p>
                </div>
              </div>
            </div>
              </NavLink>
            </div>
            
            {/*  */}
          </div>
        </div>

        <div className="projectbtn py-5 pe-5">
                <NavLink to="/k" className="text-decoration-none">
                  <button className="btn p-btn border-0 py-0 ms-auto text-capitalize border-bottom border-black rounded-0  ">
                 <span>&rarr; see all our projects</span>
                  </button>
                </NavLink>
              </div>
      </div>
    </>
  );
}

export default Portfolio;
