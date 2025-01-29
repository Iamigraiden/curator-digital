import React from "react";
import { NavLink } from "react-router-dom";

function Certified() {
  return (
    <div className="certified-comp">
      <div className="container-fluid px-3">
        <div className="row row-gap-5">
          <div className="col-lg-8 h-100">
            <div class="card text-bg-dark banner-card h-100">
              <img
                src="/public/assets/images/image-1-3.webp"
                class="card-img banner-img w-100"
                alt="..."
              />
              <div class="card-img-overlay banner-content">
                <NavLink to="/">
                  <button className="btn banner-btn px-4 rounded-pill text-black fw-bold text-capitalize">
                    OPEN
                  </button>
                </NavLink>
                <p className="fs-4 mt-4 banner-text">
                  We get it, we would look good together!
                  <br />
                  Let’s have a chat, no-strings attached!
                </p>
                <div className="banner-head card-footer">
                  <h4 className="display-5 fw-semibold">
                    Let's work together!
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 h-100">
            {/* <div><img src="/public/assets/images/image-1-4.webp" alt="" className="img-fluid banner-img" /></div> */}
            <div class="card text-bg-dark banner-card h-100">
              <img
                src="/public/assets/images/image-1-4.webp"
                class="card-img banner-img w-100"
                alt="..."
              />
              <div class="card-img-overlay banner-content">
                <NavLink to="/">
                  <button className="btn banner-btn px-4 rounded-pill text-black fw-bold text-capitalize">
                    Portfolio
                  </button>
                </NavLink>
                <p className="fs-4 mt-4 banner-text">
                  We work with Australia’s, the USA and UK’s most aspiring
                  brands and startups.
                </p>
                <div className="banner-head card-footer">
                  <h4 className="display-5 fw-semibold">See our Work</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certified;
