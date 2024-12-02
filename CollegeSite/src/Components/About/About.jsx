import React from "react";
import "./About.css";
import imgs from '@/assets/feedback.avif'
import resolve from "@/assets/reolveissue.avif";
import report from "@/assets/reportissue.avif";
import upload from "@/assets/uploadimg.avif";
import feedback from "@/assets/feedbackform.avif";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <>
    {/* header */}
    <div className="row services text-center">
        <h2 className="fs-1 fw-bold mb-3">Damage Reporting</h2>
        <span className="fs-5 service-txt">
          A platform for students to report classroom property damages easily.
        </span>
      </div>
      <div className="row mt-5 service-container">
        <div className="col-6 col-edit">
          <img className="rounded-2 img" src={report} alt="report" />
          <h2 className=" service-h1 fs-4 fw-bold mt-3">Report Issue</h2>
          <span className=" span-txt mt-3 fw-200">
            Submit damage details with department and hall ticket information.
          </span>
        </div>
        <div className="col-6">
          <img className="rounded-2" src={resolve} alt="resolve" />
          <h1 className="fs-4 fw-bold mt-3">Resolve Issue</h1>
          <span className="span-txt">
            Track the status of reported damages until resolution.
          </span>
        </div>
      </div>
      <div className="row service-container">
        <div className="col-6">
          <img className="rounded-2" src={feedback} alt="feedback" />
          <h1 className="fs-4 fw-bold mt-3">Feedback Form</h1>
          <span className="span-txt">
            Provide feedback on the resolution of reported damages.
          </span>
        </div>
        <div className="col-6">
          <img className="rounded-2" src={upload} alt="upload" />
          <h1 className="fs-4 fw-bold mt-3">Upload Photos</h1>
          <span className="span-txt">
            Attach images of the damaged property for reporting purposes.
          </span>
        </div>
      </div>
    {/* contact */}
      <div className="container">
        <div className="row contact text-center">
          <h1 className="fs-1 fw-bold mb-2">
            Contact Us for Property Reporting
          </h1>
          <span className=" ">
            Report damaged property with details and photos for resolution.
          </span>
        </div>
        <div className="row mt-5 contact-flex">
          <div className="col-6">
            <div className="form  rounded-2">
              <form className="mx-3 mt-3" action="">
                <label className="mt-5" htmlFor="">
                  {" "}
                  Enter Your Name <br></br>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Kalyan Nick"
                  />
                </label>
                <label htmlFor="">
                  Provide your Emai* <br></br>
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="abc@gmail.com"
                  />
                </label>
                <label htmlFor="">
                  Described Damaged Property* <br></br>
                  <textarea name="damage" id="" rows="4" col="3"></textarea>
                </label>
                <br></br>
                <br></br>
                <button className="bg bg-purple-700 btn ">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-6 mt-5 contact-img">
            <img src={imgs} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default About;
