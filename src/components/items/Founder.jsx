import React from 'react'
import './css/item.css'
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Founder() {
  return (
    <div className='founder-comp'>
        <div className="container-fluid px-3">
            <div className="row text-white gx-md-5">
                <div className="col-lg-6">
                    <img src="/public/assets/images/image-1-1.webp" alt="image" className='img-fluid w-100'/>
                </div>
                <div className="col-lg-5 pt-5">
                <span className="open-quote"><BiSolidQuoteAltLeft size={50}/></span> 
                <p className="display-6 fw-medium">
                We transform companies through creative innovation. As a certified B Corp agency, we design and build inventive digital experiences &amp; brands that drive impact across community, climate and humanities.</p>
                <div className="pt-3">
                <h5 className='mb-0'>Rajiv Thakur</h5>
                <span class="title">Co-Founder @ curator | digital @ Design Declares</span>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Founder
