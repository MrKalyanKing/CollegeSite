import React, { useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
  return (
    <div>
        <div className=" container mx-1 row footer rounded-2  " data-aos='zoom-in-right' >
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
                <span className=''>phone:+91 9010455590</span><br></br>
                <span>For Admission: 9154844272</span><br></br>
                <span className=''>Email:enquiry@stmarysgroup.com</span>
            </div>
            <div className='col-4  mt-5 mb-2' >
                <h1 className='fs-2 fw-bold'>Resolve</h1>
                <label htmlFor=""> Enter your Email</label><br></br>
                <input className='input mt-2 mb-2' type="text" placeholder='Enter Email' name='email' /><br></br>
            <Link to='/feedback'>   <button className='mb-2   mt-2 rounded-3 bg bg-warning damage-btn ' >Submit Damage Report</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer