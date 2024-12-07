import React, { useEffect } from "react";
import "./Services.css";
import {Link} from 'react-router-dom'
import resolve from "@/assets/reolveissue.avif";
import report from "@/assets/reportissue.avif";
import upload from "@/assets/uploadimg.avif";
import feedback from "@/assets/feedbackform.avif";
import grid1 from "@/assets/grid1.avif";
import grid2 from "@/assets/grid2.avif";
import  grid3 from "@/assets/grid3.avif";
import  grid4 from "@/assets/grid4.avif";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  })
  return (
    <>
    <div className="container">
      <div className="row services text-center" data-aos='fade-up-left'>
        <h2 className="fs-1 fw-bold mb-3">Damage Reporting</h2>
        <span className="fs-5 service-txt" data-aos='fade-up-right'>
          A platform for students to report classroom property damages easily.
        </span>
      </div>
      <Link to='/feedback'> <div className="row mt-5 service-container" >
       <div className="col-6 col-edit" data-aos='fade-right'>
          <img className="rounded-2 img" data-aos='fade-right' src={report} alt="report" />
          <h2 className=" service-h1 fs-4 fw-bold mt-3">Report Issue</h2>
          <span className=" span-txt mt-3 fw-200">
            Submit damage details with department and hall ticket information.
          </span>
        </div>
        
        <div className="col-6">
          <img className="rounded-2" data-aos='fade-left' src={resolve} alt="resolve" />
          <h1 className="fs-4 fw-bold mt-3">Resolve Issue</h1>
          <span className="span-txt">
            Track the status of reported damages until resolution.
          </span>
        </div>
      </div>
      </Link> 
      <div className="row service-container" >
        <div className="col-6"data-aos='slide-right'>
          <img className="rounded-2" data-aos='fade-right' src={feedback} alt="feedback" />
          <h1 className="fs-4 fw-bold mt-3">Feedback Form</h1>
          <span className="span-txt">
            Provide feedback on the resolution of reported damages.
          </span>
        </div>
        <div className="col-6">
          <img className="rounded-2" data-aos='fade-left' src={upload} alt="upload" />
          <h1 className="fs-4 fw-bold mt-3">Upload Photos</h1>
          <span className="span-txt">
            Attach images of the damaged property for reporting purposes.
          </span>
        </div>
      </div>
      {/* damage reporting */}
      <div className="row text-center section-txt"  data-aos='zoom-in-left' >
        <h1 className="fs-1 fw-bold mb-3">Damage Reporting</h1>
        <span className="">
          Upload photos of damaged property for swift resolution and feedback.
        </span>
      </div>
      <div class="grid-container mt-5 grid-ct">
        <div class="row row-cols-2 " data-aos='fade-down'>
          <div class="col image" data-aos='fade-right'>
            <img
              src={grid1}
              alt="grid1"
              class="img-fluid equal-size rounded-3"
            />
          </div>
          <div class="col image" data-aos='fade-left'>
            <img
              src={grid2}
              alt="grid2"
              class="img-fluid equal-size rounded-3"
            />
          </div>
          <div class="col image" data-aos='fade-right'>
            <img
              src={grid3}
              alt="grid3"
              class="img-fluid equal-size rounded-3"
            />
          </div>
          <div class="col image" data-aos='fade-left'>
            <img
              src={grid4}
              alt="grid4"
              class="img-fluid equal-size rounded-3"
            />
          </div>
        </div>
      </div>
      
    </div>
    <div className="container">
    <Footer/>
    </div>
    
    </>

  );
};

export default Services;
