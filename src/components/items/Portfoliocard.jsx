import React from 'react'
import { NavLink } from 'react-router-dom'

function Portfoliocard(props) {
  return (
    <div>
     <NavLink to="#" className="text-decoration-none">
              <div className="card portfolio-card border-0 rounded-0">
              <div class="img_area overflow-hidden">
                <img
                  src={props.image}
                  alt="image"
                  class="img-fluid  w-100"
                />  
                <div className="description">
                  <p className="text-black mb-0  bg-white px-4 py-2 rounded-pill text-uppercase">{props.cate}</p>
                </div>
              </div>
              <div class="card-body text-capitalize text-black pt-3"> 
                <h4 className="project-name">{props.title}</h4>
                <div className="workdetail">
                <p>{props.discription}</p>
                </div>
              </div>
            </div>
              </NavLink>
    </div>
  )
} 

export default Portfoliocard