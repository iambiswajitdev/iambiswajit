import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactMe = () => {
  const socile = [
    {
      icon: <i class="fab fa-github"></i>,
    },
    {
      icon: <i class="fab fa-linkedin"></i>,
    },
    {
      icon: <i class="fab fa-instagram"></i>,
    },
  ];
  return (
    <div className="contactMe">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="introHeding contact">contact me</h1>
            <span className="contLoct">📧 mrbiswajitmondal24@gmail.com</span>
            <span className="contLoct">📴 7908043895</span>
            <ul>
              {socile.map((item, index) => (
                <li className="mymedia" key={index}>
                  {item.icon}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
