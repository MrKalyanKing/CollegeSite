import React from "react";
import './DamgeR.css'
import grid1 from "@/assets/grid1.avif";
import grid2 from "@/assets/grid2.avif";
import  grid3 from "@/assets/grid3.avif";
import  grid4 from "@/assets/grid4.avif";
const DamgeR = () => {
  return (
    <div>
      <div className="row DamagR text-center">
        <h1 className="fs-1 fw-bold mb-2">Damage Reporting</h1>
        <span >
          Upload photos of damaged property for swift resolution and feedback.
        </span>
      </div>
      <div class="grid-container mt-5">
  <div class="row row-cols-2 ">
    <div class="col image">
      <img src={grid1} alt="grid1" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image">
      <img src={grid2} alt="grid2" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image">
      <img src={grid3} alt="grid3" class="img-fluid equal-size rounded-3" />
    </div>
    <div class="col image">
      <img src={grid4} alt="grid4" class="img-fluid equal-size rounded-3" />
    </div>
  </div>
</div>

    </div>
  );
};

export default DamgeR;
