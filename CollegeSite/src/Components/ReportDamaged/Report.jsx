import React from "react";
import './Report.css'
import reportimg from '@/assets/report.avif'
const Report = () => {
  return (
    <>
    <div className="container row px-4 text-center dam ">
      <h1 className="text-center fs-2 sm:fs-3 dams">
        Reporting Damaged Classroom Properties
      </h1>
      </div>
      <div className="row report-flexs">
      <div className="col-6 mt-5 report-col ">
        <h2 className="fs-2 fw-bold report-head">Student Reporting System</h2>
        <span className="fw-100 mt-1">
          Our platform enables students to report damaged properties in
          classrooms by uploading photos, ensuring prompt attention from
          management for a better learning environment.
        </span>
      </div>
      <div className="col-6 mt-5">
        <h2 className="fs-2 fw-bold">Efficient Issue Resolution</h2>
        <span className="fw-100 mt-1">
          We prioritize student feedback and track the resolution of reported
          issues, fostering a collaborative approach between students and
          management to enhance campus facilities.
        </span>
      </div>
      </div>
      <div className="row text-center mt-5 mx-3 ">
        <div className="col">
            <img className="rounded" src={reportimg} alt="report-img" />
        </div>
      </div>
    
    </>
  );
};

export default Report;
