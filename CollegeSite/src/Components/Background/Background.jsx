import React, { useEffect } from "react";
import "./Background.css";
import video1 from '@/assets/classv.mp4'
import video2 from '@/assets/whitev (1).mp4'
import {Link} from 'react-router-dom'
import Aos from "aos";
const Background = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
    <div className="video-background ">
        <h1>background video</h1>
        <video autoPlay loop muted className="background laptop">
          <source src={video2} type="video/mp4" />
        </video>
        <video autoPlay loop muted className=" background mobile-video">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="overlay" >
        <Link to='/feedback'>
         <h1  className="main "  >Report Damaged Property ClassRooms</h1>
            <span className="main1" >Easily report issues with classroom properties by uploading photos and details.</span><br></br>
            <div className="btn">
             
             <button className="btn1">Report</button> 
             
            </div>
            </Link>
        </div>
    </div>
    </div>
  );
};

export default Background;
