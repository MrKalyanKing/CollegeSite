import React from 'react'
import Background from '../Background/Background'
import Report from '../ReportDamaged/Report'
import Property from '../PropertyReport/Property'
import DamgeR from '../DamageReporting/DamgeR'
import Footer from '../Footer/Footer'
import Loginpopup from '../Loginpopup/Loginpopup'

const Home = () => {
  return (
    <div className="main-sec">
      
      <Background/>
      <main className="content-section  bg-white ">
         <div className="py-5  section  ">
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
  )
}

export default Home