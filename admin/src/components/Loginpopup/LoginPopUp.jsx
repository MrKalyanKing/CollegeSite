

// export default LoginPopUp
import React, { useState } from 'react';
import './login.css';
import avatar from '../../assets/avatar.svg';
import bg from '../../assets/bg.svg';
import wave from '../../assets/wave.png';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPopUp = () => {
  const [data, setData] = useState({
    user: '',
    password: ''
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleError = (err) => toast.error( err,
     { 
      position: "top-right", 
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      theme: "light",
     })

     const handleSuccess = (msg) => toast.success( msg, { 
      position: "top-right", 
      autoClose: 5000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      theme: "light",
     })

  const onLogin = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/admin/login';
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
      // handleSuccess( "Logged In Successfully");
      //alert("Logged in succesfull")
        localStorage.setItem('token', response.data.token); 
        navigate('/admin/pannel'); 
        return res.json({success:true,message:'Logged In Succesfully'})
      } else {
        return response.json({success:false,message:'Youre not an Admin'})
      //  handleError( "You're not an Admin");
      //alert("You'r not allowed to Login")
      }
    } catch (err) {
      //handleError("Failed to login, please try again.");
      //alert("Failed to login, please try again")
      return resizeBy.json({success:false,message:'Failed to login, please try again.'})
    }
  };

  return (
    <>
      <img className="wave" src={wave} alt="wave"/>
      <div className="container ans">
        <div className="img">
          <img src={bg} alt="background"/>
        </div>
        <div className="login-content">
          <form onSubmit={onLogin}>
            <img src={avatar} alt="avatar"/>
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input onChange={onChangeHandler} type="text" name='user' value={data.user} className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i"> 
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input onChange={onChangeHandler} type="password" name='password' value={data.password} className="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default LoginPopUp;
