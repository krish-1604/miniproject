import React, { useState } from "react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginImg from "../assets/loginImg.png";
import Footer from "./Footer";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import or from "../assets/or.png";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import firebase from './firebase'; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorOcured, setErrorOccured] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible,setIsVisible]=useState(false);
  const [loginError, setLoginError] = useState(""); 
  const navigate = useNavigate(); 

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "*Email is required";
      setErrorOccured(true);
    } else {
      setErrorOccured(false); 
    }

    if (!password.trim()) {
      errors.password = "*Password is required";
      setErrorOccured(true);
    } else {
      setErrorOccured(false); 
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (username.trim() && password.trim()) {
          await firebase.auth().signInWithEmailAndPassword(username, password);
          console.log("Login successful");
          navigate("/userhome");
        } else {
          setLoginError("Please provide valid email and password."); 
          setErrorOccured(true);
        }
      } catch (error) {
        console.error("Error logging in:", error.message);
        setLoginError("Incorrect Email or password."); 
        setErrorOccured(true);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIsVisible(!isVisible);
  };

  const errorsArray = Object.values(errors);

  return (
    <>
    <div className="login-container">
      <Navbar />
      <div className="mainLoginContainer">
        <div className="loginDiv">
          <h1>Login</h1>
          <p>Log In using social networks</p>
          <div className="social-icons">
            <a target="_blank" href="https://www.google.com">
              <img src={google} className="google" />
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <img src={facebook} />
            </a>
          </div>
          <img src={or} className="or" />
          <div className="input-label">Email</div>
          <input
            type="text"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateForm}
            required 
          />
          <div className="input-label">Password</div>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validateForm}
              required
            />
            <img src={isVisible? show : hide } className="password-toggle" onClick={togglePasswordVisibility} />
          </div>
          {errorOcured && <div className="error">{loginError}</div>}
          <div className="error">{errorsArray.join(" ")}</div>
          <button type="button" className={setErrorOccured ? "loginbuttonrevised" : "loginbutton"} onClick={handleSubmit}>
            <a href="/userhome" className="nakli2">
            Login
            </a>
          </button>
        </div>
        <div className="signUpLogin">
          <h1>New Here?</h1>
          <p>Sign Up and discover a great amount of new opportunities</p>
          <Link
            to="/signup"
            style={{
              marginTop: "40px",
              backgroundColor: "#FFECD1",
              border: "none",
              borderRadius: "10.1px",
              height: "60px",
              width: "200px",
              color: "#083D32",
              fontSize: "15px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
