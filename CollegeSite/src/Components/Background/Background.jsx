import React from "react";
import "./Background.css";
import video from '/Users/malavath suresh/OneDrive/Desktop/project/CollegeSite/src/assets/college.mp4'
const Background = () => {
  return (
    <div>
    <div className="video-background ">
        <h1>background video</h1>
        <video autoPlay loop muted className="background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
            <h1  className="main" >Report Damaged Property ClassRooms</h1>
            <span className="main1">Easily report issues with classroom properties by uploading photos and details.</span>
            <div className="btn">
              <button className="btn1">Report</button>
              <button></button>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Background;