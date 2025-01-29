import React, { useState } from 'react'
import './css/item.css'
function Services() {
  const [hoverImage, sethoverImage]=useState(1);

  const handleMouseEnter = (imageNumber) => {
    sethoverImage(imageNumber);
  };

  // const handleMouseLeave = () => {
  //    sethoverImage(1);
  // };
  return (
    <div className='container-fluid  px-3 services-comp bg-black '>
      {/* top heading  */}
      <div className="row gap-lg-5 row-gap-5">
          <div className="text-capitalize text-start left-section offset-lg-2 col-lg-4 col-md-6">
            {/* <h1 className="display-1 text-white">
              passionate about craft.
              <span className="color1"> driven by impact.</span>
            </h1> */}
               <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">where</h4> 
                <h4 className="display-1 text-white mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">creativity</h4> 
                <h4 className="color1 display-1 mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">meets</h4>
                <h4 className="color1 display-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">strategy</h4>
          </div>
          <div className="right-section text-white text-start col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
            <p className="fs-5">
            Discover our extensive range of services, expertly crafted to drive digital success through innovative design and development.
            </p>
          </div>
        </div>
        {/* mid section  */}
        <div className="container service_div">
        <div className="services-module d-flex gap-5 flex-md-row flex-column overflow-hidden">
            <div className="col-md-6">
          <div className='service_img_module'>
           {/* for brand guidelines */}
           {hoverImage === 1 && (
                <div className='transition-image'>
                <h5 className='text-white'>Crafting powerfull identities that leads to lasting impressions.</h5>
                {/* #page>div.logo+ul#navigation>li*5>a{Item $} */}
                <ul className="service_detail text-capitalize text-white list-style-none pt-4">
                  <li>brand strategy</li>
                  <li>visual identity design</li>
                  <li >corporate guideline</li>
                  <li >brand collateral</li>
                  <li>rebranding services</li>
                </ul>
              <img 
                src="https://appcode.app/wp-content/uploads/2021/11/Image-Hover-Zoom-With-CSS-Scale.png"
                alt="Image 1"
                className="img-fluid mb-3"
              />
              </div>
            )}
              {/* for graphic design */}
              {hoverImage === 2 && (
                <div className='transition-image'>
                <h5 className='text-white'>Crafting powerfull identities that leads to lasting impressions.</h5>
                {/* #page>div.logo+ul#navigation>li*5>a{Item $} */}
                <ul className="service_detail text-capitalize text-white list-style-none pt-4">
                  <li>brand strategy</li>
                  <li>visual identity design</li>
                  <li >corporate guideline</li>
                  <li >brand collateral</li>
                  <li>rebranding services</li>
                </ul>
              <img 
                src="https://appcode.app/wp-content/uploads/2021/11/Image-Hover-Zoom-With-CSS-Scale.png"
                alt="Image 1"
                className="img-fluid mb-3"
              />
              </div>
            )}
          </div>
          </div>
              <div className="col-md-5 offset-md-1">
            <div class="service_item text-capitalize">
            <h3 class="service_item_heading display-5 text-white" onMouseEnter={()=>handleMouseEnter(1)}>Brand guidelines</h3>
            <h3 class="service_item_heading display-5 text-white" onMouseEnter={()=>handleMouseEnter(2)}>graphic design</h3>
            <h3 class="service_item_heading display-5 text-white">web design</h3>
            <h3 class="service_item_heading display-5 text-white">web development</h3>
            <h3 class="service_item_heading display-5 text-white">ux/ui design</h3>
            <h3 class="service_item_heading display-5 text-white">product design</h3>
            <h3 class="service_item_heading display-5 text-white">digital marketing</h3>
            <h3 class="service_item_heading display-5 text-white">app development</h3>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
