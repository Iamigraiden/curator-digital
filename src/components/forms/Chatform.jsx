import React, { useState } from 'react'
import './css/chatform.css'

function Chatform() {
    const[form, setForm]=useState(false);
    const openform=()=>{
        setForm(!form);
    }
  return (
    <div className='chat-form'>
        
         {/* chatnow image  */}
         <img src="/public/assets/images/Curator_ChatNow.png" className='chat-now' onClick={openform} alt="" />
         <div id="chatForm" className={form ? 'slide-width sidepanel' : 'sidepanel'}>       
         <a href="javascript:void(0)" class="closebtn text-white"   onClick={openform}>&times;</a>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 d-none d-md-block px-0">
                    <img src="/public/assets/images/image-1-2.webp" alt="image" className='img-fluid form-img' />
                </div>
                <div className="col-md-7 col-12 text-white form-back">
                    <div className="col-md-9 mx-auto py-5 formInfo">
                    <h4 className='fs-1'>Let's talk</h4>
                    <p className='mt-4'>Let’s build something important.</p>
                    <form action="" className='pt-4'>
                    <div class="mb-4">
                        <input type="text" class="form-control" placeholder='Name'/>
                    </div>
                    <div class="mb-4">
                        <input type="email" class="form-control" placeholder='Email address' aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Company name</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">What can we help you with?</label>
                        <br />
                        <textarea placeholder='Message' className='form-control'></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Where do you hear about Reny?</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-4 col-lg-4 col-6">
                        <label class="form-label">Desired deadline?</label>
                        <input type="date" class="form-control"/>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Do you have a budget in mind?</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Do you have designed you would like to share?</label>
                        <input type="file" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-dark float-end rounded-pill px-3">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Chatform
