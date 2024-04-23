import React, { useState } from 'react';
import Navbar from "./navbar";
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import or from "../assets/or.png";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import firebase from './firebase'; 
import "./signup.css";

const Signup = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const strongRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/;

    if (!username.trim()) {
      errors.username = '*Name is required';
    }

    if (!email.trim()) {
      errors.email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '*Email is invalid';
    }

    if (!password.trim()) {
      errors.password = '*Password is required';
    } else if (password.length < 8) {
      errors.password = '*Password must be at least 8 characters long';
    } else if (!strongRegex.test(password)) {
      errors.password = '*Password must contain at least one special character, one digit, and be 8 characters long';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = '*Passwords do not match';
    }

    setErrors(errors);
    setIsError(Object.keys(errors).length > 0); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Account created successfully");
      setSignupSuccess(true);
      navigate("/userhome");
    } catch (err) {
      console.error("Error creating account:", err.message);
      setIsError(true);
    }
  };

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const getPasswordStrength = () => {
    const strengthRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/;
    if (password.length < 8) return 'Weak';
    if (strengthRegex.test(password)) return 'Strong';
    return 'Medium';
  };

  const getPasswordColor = () => {
    const strength = getPasswordStrength();
    if (strength === 'Strong') return 'green';
    if (strength === 'Medium') return 'yellow';
    return 'red';
  };

  return (
    <div>
      <Navbar/>
      <div className='mainSignUpContainer'>
        <div className='signupDiv'>
          <h1>Sign Up</h1>
          <p>Sign Up using social networks<br/></p>
          <div className="social-icons">
            <a target="_blank" href="https://www.google.com"><img src={google} className="google"/></a>
            <a target="_blank" href="https://www.facebook.com"><img src={facebook}/></a>
          </div>
          <img src={or} className="or"/>
          
          <div className="input-container">
            <div className="input-label">Name</div>
            <input 
              type="text" 
              className="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateForm}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          
          <div className="input-container">
            <div className="input-label">Email</div>
            <input 
              type="text" 
              className="username" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateForm}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          
          <div className="input-container">
            <div className="input-label">Password</div>
            <input 
              type={isVisible ? "text" : "password"}
              className="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validateForm}
            />
            <div style={{ color: getPasswordColor() }}>{getPasswordStrength()}</div>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          
          <div className="input-container">
            <div className="input-label">Confirm Password</div>
            <input 
              type={isVisible ? "text" : "password"}
              className="password "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateForm}
            />
            <img src={isVisible ? show : hide } className="password-toggle" onClick={togglePasswordVisibility} />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          
          <button type='submit' className={isError ? "SignUpbuttonrevised" : "SignUpbutton"} onClick={handleSubmit}>
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
