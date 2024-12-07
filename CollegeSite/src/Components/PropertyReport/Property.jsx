import React from "react";
import { useEffect } from "react";
import "./Property.css";
import damage from "@/assets/damage.avif";
import feedback from "@/assets/feedback.avif";

import AOS from 'aos'
import "aos/dist/aos.css";


const Property = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Animation duration
  }, []);

  return (
    <>
      <div className="row text-center" data-aos="fade-up">
        <div className="property col">
          <h1 className="fs-1 fw-bold mb-2">Property Reporting System</h1>
          <span>
            Easily report classroom damages with photos and details for prompt
            management resolution.
          </span>
        </div>
      </div>

      <div className="row mt-5 property-flexs">
        <div className="col-6 bg bg-info-subtl property-col" data-aos="fade-right">
          <h2 className="fs-4 fw-bold mb-2">Issue Resolution Feedback</h2>
          <span className="span-txt">
            Students can confirm when issues are resolved, ensuring effective
            communication with management.
          </span>
          <img className="mt-5" src={feedback} alt="feedback" />
        </div>

        <div className="col-6 bg bg-info-subtl property-col" data-aos="fade-left">
          <h2 className="fs-4 fw-bold mb-2">Submit Damage Report</h2>
          <span className="span-txt">
            Upload photos and provide details like department, section, and hall
            ticket number for reporting.
          </span>
          <img className="mt-5 damage" src={damage} alt="damage" />
        </div>
      </div>
    </>
  );
};

export default Property;