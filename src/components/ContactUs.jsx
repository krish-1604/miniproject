import React from "react";
import Navbar from "./navbar";
import "./contactus.css"; 
import Footer from "./Footer"

const Contact = () => {
  return (
    <div className="contact-us-container">
      <Navbar />
      <div className="contact-info">
        <h1 className="contacth1">Contact Us</h1>
        <div className="info">
          <div className="details">
            <h2>Website Developer</h2>
            <p>Contact Person: Krish Mehta</p>
            <p>Email: <a href="mailto:krish1604mehta@gmail.com" style={{ textDecoration: 'underline', color: '#085444' }}>krish1604mehta@gmail.com</a></p>
            <p>Phone: +91 77777 77777</p>
          </div>
        </div>
        <div className="info">
          <div className="details">
            <h2>Website Developer</h2>
            <p>Contact Person: Vedang Garg</p>
            <p>Email: <a href="mailto:vedanggarg@gmail.com" style={{ textDecoration: 'underline', color: '#085444' }}>vedanggarg@gmail.com</a></p>
            <p>Phone: +91 77777 77777</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;