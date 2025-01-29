import React, { useEffect } from 'react'
import './css/item.css'
import Aos from "aos";
import "aos/dist/aos.css";
function Workmodes() {
  useEffect(() => {
    Aos.init({
      once: false,  
    });
  }, []);
  return (
    <div className='workmode-comp'>
    <div className="container-fluid px-3 work-mode">
        {/* bg image */}
        <div>
        <img src="/public/assets/images/Image119.webp" alt="background-img" className='workmode-back'/>
        </div>
      <h2 className='text-capitalize text-center text-white display-1 fw-bold '>our modes of working</h2>
      {/*  */}
      <div className="row row-gap-3 mt-5 order-md-2 accor-section">
            <div className="text-capitalize text-start left-section order-0 order-md-1 col-md-6 col-lg-4 offset-lg-1">
                <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">passion- </h4> 
                <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">driven,</h4> 
                <h4 className="color1 display-1 mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">results-</h4>
                <h4 className="color1 display-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">focused</h4>
            </div>
            <div className="text-white order-md-0 order-1 col-md-6"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" >
            <div className='col-lg-8 mx-auto'>
              <div class="accordion pt-0">
      <section class="accordion-item accordion-item--default pt-0">
       <h4 className='text-capitalize display-5 mode-head'>project basis</h4>
        <div class="accordion-item-content">
        <p className="fs-5 mode-para">
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              </p>
        </div>
    </section>
    <section class="accordion-item">
    <h4 className='text-capitalize display-5 mode-head'>monthly retainer</h4>
        <div class="accordion-item-content">
        <p className="fs-5 mode-para">
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              </p>
        </div>
    </section>
    <section  class="accordion-item">
    <h4 className='text-capitalize display-5 mode-head'>consultation</h4>
        <div class="accordion-item-content">
        <p className="fs-5 mode-para">
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              </p>
        </div>
    </section>
    <section class="accordion-item">
         <h4 className='text-capitalize display-5 mode-head'>white labeling</h4>
        <div class="accordion-item-content">
        <p className="fs-5 mode-para">
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              </p>
        </div>
    </section>
    <section class="accordion-item">
         <h4 className='text-capitalize display-5 mode-head'>offshore development center</h4>
        <div class="accordion-item-content">
        <p className="fs-5 mode-para">
              A fixed-price model is ideal for one-time projects with a well-defined scope, clear deliverables, and a specific timeline and budget.
              </p>
        </div>
    </section>
</div>      

            </div>
            </div>  
            </div>
    </div>
    </div>
  )
}

export default Workmodes
