import React from "react";
import "./Property.css";
import damage from "@/assets/damage.avif";
import feedback from "@/assets/feedback.avif";
const Property = () => {
  return (
    <>
      <div className="row ">
        <div className="property col text-center">
          <h1 className="fs-1 fw-bold mb-2">Property Reporting System</h1>
          <span>
            Easily report classroom damages with photos and details for prompt
            management resolution.
          </span>
        </div>
      </div>
      <div className="row mt-5 property-flexs   ">
        <div className="col-6 bg bg-info-subtl property-col ">
          <h2 className="fs-4 fw-bold mb-2">Issue Resolution Feedback</h2>
          <span className="span-txt">
            Students can confirm when issues are resolved, ensuring effective
            communication with management.
          </span>
          <img className="mt-5" src={feedback} alt="feedback" />
        </div>

        <div className="col-6 bg bg-info-subtl property-col ">
          <h2 className="fs-4 fw-bold mb-2">Submit Damage Report</h2>
          <span className="span-txt">
            Upload photos and provide details like department, section, and hall
            ticket number for reporting
          </span>
          <img className='mt-5 damage'src={damage} alt="damage" />
        </div>
      </div>
    </>
  );
};

export default Property;
