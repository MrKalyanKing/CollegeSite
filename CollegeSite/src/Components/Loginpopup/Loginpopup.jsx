import React, { useEffect, useState } from "react";
import "./LoginPopUp.css";
import cross from "@/assets/cross_icon.png";
import { useContext } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Loginpopup = ({ setLogin }) => {
  const { url, setToken } = useContext(AppContext);
  const [currState, setCurrState] = useState("SingUp");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //toast container
  const handleError = (err) =>
    toast.error(err || "Something went wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

  const handleSuccess = (msg) =>
    toast.success(msg || "Operation successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/login";
    } else {
      newUrl += "/api/register";
    }
    console.log("FinalUrl", newUrl);
    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setLogin(false);
        handleSuccess(response.data.message || "Logged In Succesfull");
      } else {
        alert(response.data.message);
        handleError(response.data.message || "Something went wrong");
      }
      //console.log(data);
    } catch (err) {
      console.log(err);
      handleError(err.response?.data?.message || "An error occurred.");
    }
  };
  // useEffect(()=>{
  //     console.log(data);

  // },[data])
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currState}</h1>
          <img onClick={() => setLogin(false)} src={cross} alt="" />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Enter Username"
              name="name"
            />
          )}

          <input
            onChange={onChangeHandler}
            value={data.email}
            type="text"
            name="email"
            id=""
            placeholder="Enter Email"
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            name="password"
            placeholder="Enter Pass"
          />
        </div>
        <button type="submit">
          {currState === "SignUp" ? "Create A Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>by Continuing,Agree to trems and condition,privacy&policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create A nre Account{" "}
            <span onClick={() => setCurrState("SingUp")}>Click Here</span>{" "}
          </p>
        ) : (
          <p>
            Already Have an Account{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>{" "}
          </p>
        )}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default Loginpopup;
