import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col, Container } from "react-bootstrap";
import footer from "../assets/1st.png";
import bannerImg from "../assets/banner-img.png";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="Banner-container">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <div className="banner-text">
                  <h1>Welcome to Empower All</h1>
                  <p className="banner-detail">
                    Together, We Can Make a Difference
                  </p>
                  <div style={{display: "flex"}}>
                  <a href="#content" className="bannerHelp">
                    Help Someone
                  </a>
                  <Link
                    to="/login"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#083D32",
                      border: "none",
                      borderRadius: "11.26px",
                      height: "40px",
                      width: "120px",
                      color: "white",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={bannerImg} className="bannerImg" />
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </div>
  );
};

export default Banner;
