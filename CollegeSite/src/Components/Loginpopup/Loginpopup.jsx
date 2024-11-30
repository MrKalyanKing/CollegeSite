import React, { useState } from 'react'
import './LoginPopUp.css'
import cross from '@/assets/cross_icon.png'

const Loginpopup = ({setLogin}) => {
    const [currState,setCurrState]=useState('SingUp')
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
        <div className="login-popup-title">
            <h1>{currState}</h1>
            <img onClick={()=>setLogin(false)} src={cross} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==='Login'?<></>:<input type="text" placeholder='Enter Username' name='username'/>}
            
            <input type="text" name="email" id="" placeholder='Enter Email' />
            <input type="password" name='password' placeholder='Enter Pass' />
        </div>
        <button>{currState==='SignUp'?"Create A Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p>by Continuing,Agree to trems and condition,privacy&policy</p>
        </div>
        {currState==='Login'?
        <p>Create A nre Account <span onClick={()=>setCurrState('SingUp')} >Click Here</span> </p>:
        <p>Already Have an Account <span onClick={()=>setCurrState('Login')} >Login</span> </p>
        }
    </form>
    </div>
  )
}

export default Loginpopup