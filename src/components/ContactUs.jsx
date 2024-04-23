import React from "react";
import Navbar from "./navbar";
import "./contactus.css"; 
import Footer from "./Footer"

const Contact = () => {
  return (
    <div className="contact-us-container">
      <Navbar/>
      <div className="contact-info">
        <h1 className="contacth1">Contact Us</h1>
        <div className="info">
          <div className="details">
            <h2>Website Developer</h2>
            <p>Contact Person: Dhairya Shah</p>
            <p>Email: <a href="mailto:dhairya@gmail.com" style={{ textDecoration: 'underline', color: '#085444' }}>dhairya@gmail.com</a></p>
            <p>Phone: +91 77777 77777</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;