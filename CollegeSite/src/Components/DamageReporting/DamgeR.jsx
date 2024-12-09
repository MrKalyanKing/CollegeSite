import React, { useEffect } from "react";
import './DamgeR.css'
import grid1 from "@/assets/grid1.avif";
import grid2 from "@/assets/grid2.avif";
import  grid3 from "@/assets/grid3.avif";
import  grid4 from "@/assets/grid4.avif";
import grid11 from "@/assets/eee1.jpg";
import grid22 from "@/assets/fff1.jpg";
import  grid33 from "@/assets/ggg1.jpg";
import  grid44 from "@/assets/grid4.avif";
import Aos from "aos";
const DamgeR = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
      <div className="row DamagR text-center" data-aos='slide-right'>
        <h1 className="fs-1 fw-bold mb-2">Damage Reporting</h1>
        <span >
          Upload photos of damaged property for swift resolution and feedback.
        </span>
      </div>
      <div class="grid-container mt-5">
  <div class="row row-cols-2  " data-aos='fade-down'>
    <div class="col image" data-aos='fade-right'>
      <img src={grid11} alt="grid1" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image"data-aos='fade-left'>
      <img src={grid22} alt="grid2" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image"data-aos='fade-rigth'>
      <img src={grid33} alt="grid3" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image" data-aos='fade-left'>
      <img src={grid44} alt="grid4" class="img-fluid equal-size rounded-3" />
    </div>
  </div>
</div>

    </div>
  );
};

export default DamgeR;
