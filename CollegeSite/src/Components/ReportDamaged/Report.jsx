import React, { useEffect } from "react";
import './Report.css'
import AOS from 'aos'
import reportimg from '@/assets/report.avif'
import {Link} from 'react-router-dom'
import "aos/dist/aos.css";
const Report = () => {
  useEffect(()=>{
    AOS.init(({duration:2000}))
  },[])

  return (
    <>
    <div className="container row px-4 text-center dam " data-aos='flip-right' >
      <h1 className="text-center fs-2 sm:fs-3 dams">
        Reporting Damaged Classroom Properties
      </h1>
      </div>
      <div className="row report-flexs ">
      <div className="col-6 mt-5 report-col  "data-aos='fade-right'>
        <h2 className="fs-2 fw-bold report-head"  >Student Reporting System</h2>
        <span className="fw-100 mt-1 report-span"  >
          Our platform enables students to report damaged properties in
          classrooms by uploading photos, ensuring prompt attention from
          management for a better learning environment.
        </span>
      </div>
      <div className="col-6 mt-5"data-aos='fade-left'>
        <h2 className="fs-2 fw-bold report-head">Efficient Issue Resolution</h2>
        <span className="fw-100 mt-1 report-span" >
          We prioritize student feedback and track the resolution of reported
          issues, fostering a collaborative approach between students and
          management to enhance campus facilities.
        </span>
      </div>
      </div>
      <div className="row  mt-5  report-img " data-aos='fade-left'>
        <div className="col">
           <Link to='/feedback'> <img className="rounded" src={reportimg} alt="report-img" /></Link>
        </div>
      </div>
    
    </>
  );
};

export default Report;
