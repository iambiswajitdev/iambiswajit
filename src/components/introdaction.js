import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Introdaction = () => {
  return (
    <>
      <div className="introduceMe">
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <h1 className="introHeding">
                hello, i am biswajit. Welcome to my Portfolio 👋.
              </h1>
              <p className="introDec">
                I'm from Kolkata, India. To improve as a Frontend developer and
                also an industry professional. Frontend developer that
                specializes in utilizing React.js to create user-facing
                functionality.
                <br /> I'm looking forward to putting my enthusiasm into
                practice on a full-time basis. Every day, I attempt to learn
                something new to advance my career as a High-Level programmer.
              </p>
            </Col>
            <Col lg={6} xs={12}>
              <Row>
                <img
                  className="introImg"
                  src="https://geekflare.com/wp-content/uploads/2019/07/developer-illustration.png"
                  alt=""
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Introdaction;
