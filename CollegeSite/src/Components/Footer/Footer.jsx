import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className="row footer rounded-2 ">
            <div className='col-4 mt-5' >
                <h2 className='fs-2 fw-bold mb-2'>Report</h2>
                <span>Submit issues regarding classroom damages easily online.</span>
                <div className="icons fs-2 d-flex gap-8 mt-3" >
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className='col-4  mt-5 mb-5' >
                <h2 className='fs-2 fw-bold mb-2'>Upload</h2>
                <span className=''>+9392491012</span><br></br>
                <span className=''>badhavathkalyan08@gmail.com</span>
            </div>
            <div className='col-4  mt-5 mb-2' >
                <h1 className='fs-2 fw-bold'>Resolve</h1>
                <label htmlFor=""> Enter your Email</label><br></br>
                <input className='input mt-2 mb-2' type="text" placeholder='Enter Email' name='email' /><br></br>
                <button className='mb-2   mt-2 rounded-3 bg bg-warning damage-btn ' >Submit Damage Report</button>
            </div>
        </div>
    </div>
  )
}

export default Footer