import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div className="aboutMe">
              <div className="logo">
                <img src="../images/logo.png" alt="" />
              </div>
              <h3 className="myName">Biswajit Mondal</h3>
              <div class="wrapper">
                <ul class="dynamic-txts">
                  <li>
                    <span>I'm a front-end Developer</span>
                  </li>
                  <li>
                    <span>I'm a React Js Developer</span>
                  </li>
                  <li>
                    <span>I'm a Web Designer</span>
                  </li>
                  <li>
                    <span>I'm a Developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
