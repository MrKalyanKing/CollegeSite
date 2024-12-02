import React from 'react'
import './Contacts.css'
import imgs from '@/assets/feedback.avif'
import Footer from "../Footer/Footer";
const Contacts = () => {
  return (
    <>
    <div className='container'>
      <div className="row contact text-center">
        <h1 className='fs-1 fw-bold mb-2'>Contact Us for Property Reporting</h1>
        <span className=' ' >Report damaged property with details and photos for resolution.</span>
      </div>
      <div className="row mt-5 contact-flex">
        <div className='col-6' >
            <div className="form  rounded-2">
            <form className='mx-3 mt-3'  action="">
                <label className='mt-5' htmlFor=""> Enter Your Name <br></br>
                <input type="text" name="name" id="" placeholder='Kalyan Nick' />
                </label>
                <label htmlFor="">Provide your Emai* <br></br>
                    <input type="text" name="email" id="" placeholder='abc@gmail.com' />
                </label>
                <label htmlFor="">Described Damaged Property* <br></br>
                    <textarea name="damage" id="" rows='4' col='3'></textarea>
                </label><br></br><br></br>
                <button className='bg bg-purple-700 btn '>Submit</button>

            </form>
            </div>
        </div>
        <div className='col-6 mt-5 contact-img' >
                <img src={imgs} alt="" />
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
