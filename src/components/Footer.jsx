import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from "../assets/Group 21.png";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerLogin">
      <Row>
        <Col xs={12} sm={6} md={4}>
          <div className="footerImgContainer">
            <img src={logo} className="footerImg" alt="Logo" />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="toolsContainer">
            <h2>Tools</h2>
            <ul>
              <li><Link to="/home" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>Home</Link></li>
              <li><Link to="/report" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>Report</Link></li>
              <li><Link to="/home#getHelp" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>Get Help</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>Contact Us</Link></li>
              <li><Link to="/login" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>Log In</Link></li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div className="contactContainer">
            <h2>Contact Us</h2>
            <ul>
              <li>
                Vellore Institute of Technology, <br />
                Gorbachev Road, <br />
                Vellore - 632014, <br />
                Tamil Nadu - India
              </li>
              <li><a href="mailto:empowerall@gmail.com" style={{ textDecoration: 'underline', color: '#e8d5b8' }}>empowerall@gmail.com</a></li>
              <li>+91 77777 77777</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
