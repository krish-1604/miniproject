import React, { useEffect, useState } from "react";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navImg from '../assets/Group 21.png';
import "./navCss.css";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light" className="navBarDes" expand="md">
        <Container>
          <Navbar.Brand href="home">
            <img src={navImg} alt="Hello" className="navImg"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home">
              <div className="homeButton">
                Home
              </div>
            </Nav.Link>
            <Nav.Link href="report">
              <div className="reportButton">
              Report
              </div>
              </Nav.Link>
            <Nav.Link href="blogs">
              <div className="blogButton">
              Blogs
              </div>
              </Nav.Link>
              
            <Nav.Link href="contact">
              <div className="contactButton">
              Contact Us
              </div>
              </Nav.Link>
            <Nav.Link href="login">
              <div className="loginButton">
              Log In
              </div>
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
