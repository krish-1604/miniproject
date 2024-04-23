import React, { useState } from 'react';
import Navbar from "./navbar";
import Footer from './Footer';
import { Link } from "react-router-dom";
import loginImg from "../assets/loginImg.png";
import "./signup.css";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import or from "../assets/or.png"
import show from "../assets/show.png";
import hide from "../assets/hide.png";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isError,setIsError]= useState(false);
  const [isVisible,setIsVisible]=useState(false);

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = '*Username is required';
      setIsError(true);
    }

    if (!email.trim()) {
      errors.email = '*Email is required';
      setIsError(true);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '*Email is invalid';
      setIsError(true);
    }

    if (!password.trim()) {
      errors.password = '*Password is required';
      setIsError(true);
    } else if (password.length < 6) {
      errors.password = '*Password must be at least 6 characters long';
      setIsError(true);
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = '*Passwords do not match';
      setIsError(true);
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted');
    }
  };
  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Navbar/>
      <div className='mainSignUpContainer'>
        <div className='signupDiv'>
          <h1>Sign Up</h1>
          <p>Sign Up using social networks<br/>
          </p>
          <div className="social-icons">
          <a target="_blank" href="https://www.google.com"><img src={google} className="google"/></a><a target="_blank" href="https://www.facebook.com"><img src={facebook}/></a>
          </div>
          <img src={or} className="or"/>
          <div className="input-label">Name</div>
        <input 
          type="text" 
          className="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateForm}
        />
        {errors.username && <span className="error">{errors.username}</span>}
        
        
        <div className="input-label">Email</div>
        <input 
          type="text" 
          className="username" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateForm}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        
        <div className="input-label">Password</div>
        <input 
          type={isVisible?"text":"password"}
          className="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validateForm}
        />
        <img src={isVisible? show : hide } className="password-toggle" onClick={togglePasswordVisibility} />
        {errors.password && <span className="error">{errors.password}</span>}
        <div className="input-label">Confirm Password</div>
        <input 
          type={isVisible?"text":"password"}
          className="password "
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validateForm}
        />
        <img src={isVisible? show : hide } className="password-toggle" onClick={togglePasswordVisibility} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        <button type='button' className={isError?"SignUpbuttonrevised":"SignUpbutton"}>
          Sign Up
        </button>
        </div>
        <div className="loginSignUp">
          <h1>Already have an account?</h1>
          <p>Pick up where you left off.</p>
          <Link
            to="/login"
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
            Log In
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
