import React, { useState } from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import Service from "./Components/pages/Service";
import About from "./Components/pages/about";
import Blog from "./Components/pages/blog";
import Contact from "./Components/pages/Contact";
import Loginpopup from "./Components/Loginpopup/Loginpopup";
import Footer from "./Components/Footer/Footer";
import Feedback from "./Components/problemSubmit/Feedback";
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
   const [showLogin,setLogin]=useState(false)
  return (
   <>
    <Navbar setLogin={setLogin}/>
   {showLogin?<Loginpopup setLogin={setLogin}/>:null}
  
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
   </Routes>
   
   </>
  );
};

export default App;
