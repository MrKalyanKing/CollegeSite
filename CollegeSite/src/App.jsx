import React, { useState } from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import { useEffect } from "react";
import Report from "./Components/ReportDamaged/Report";
import Property from "./Components/PropertyReport/Property";
import DamgeR from "./Components/DamageReporting/DamgeR";
import Footer from "./Components/Footer/Footer";

const App = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="main-sec">
      <Navbar />
      <Background/>
      <main className="content-section  bg-white ">
         <div className="py-5  section ">
          <div className="mx-5">
          <Report />
          <Property/>
          <DamgeR/>
          <Footer/>
          </div>
          
          </div>
          {/* Add more sections here if needed */} 
           </main>
          
      </div>
  );
};

export default App;
