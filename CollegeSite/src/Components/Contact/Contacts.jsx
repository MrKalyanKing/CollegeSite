import React, { useEffect } from 'react'
import './Contacts.css'
import imgs from '@/assets/feedback.avif'
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
const Contacts = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
    <div className='container mx-3' >
      <div className="row contact text-center">
        <h1 className='fs-1 fw-bold mb-2' data-aos='fade-left'>Contact Us for Property Reporting</h1>
        <span className=' ' data-aos='fade-left'>Report damaged property with details and photos for resolution.</span>
      </div>
      <div className="row mt-5 contact-flex">
        <div className='col-6' >
            <div className="form  rounded-2" data-aos='zoom-in-left'>
            <div className='mx-5 mt-3 '>
                <label className='mt-5' htmlFor=""> Enter Your Name </label><br></br><br></br>
                <input type="text" name="name" id="" placeholder='Kalyan Nick' /><br></br><br></br>
                <label htmlFor="">Provide your Email* </label><br></br>
                <input type="text" name="email" id="" placeholder='abc@gmail.com' /><br></br><br></br>
                <label htmlFor="">Described Damaged Property*</label><br></br><br></br>
                <textarea name="damage" id="" rows='4' col='3'></textarea><br></br><br></br>
                
            <Link to='/feedback'>    <button className='bg bg-purple-700 btn '>Submit</button></Link>

            </div>
            </div>
        </div>
        <div className='col-6 mt-5 contact-img' data-aos='fade-up-right' >
                <img src={imgs} alt="img" />
        </div>
      </div>
    </div>
    <div className="container">
    <Footer/>
    </div>
    </>
  )
}

export default Contacts
