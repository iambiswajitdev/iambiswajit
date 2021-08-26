import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactMe = () => {
  const socile = [
    {
      icon: <i class="fab fa-github"></i>,
      link: "https://github.com/iambiswajitdev",
    },
    {
      icon: <i class="fab fa-linkedin"></i>,
      link: "https://www.linkedin.com/in/biswajit-mondal-7543a4215/",
    },
    {
      icon: <i class="fab fa-instagram"></i>,
      link: "https://www.instagram.com/biswajit0999/",
    },
  ];
  return (
    <div className="contactMe">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="introHeding contact">contact me</h1>
            <span className="contLoct">
              <a
                rel="noreferrer"
                target="_blank"
                href="mailto:mrbiswajitmondal24@gmail.com"
              >
                📧 mrbiswajitmondal24@gmail.com
              </a>
            </span>
            <span className="contLoct">
              <a rel="noreferrer" href="tel:7908043895">
                📴 7908043895
              </a>
            </span>
            <ul>
              {socile.map((item, index) => (
                <li className="mymedia" key={index}>
                  <a rel="noreferrer" target="_blank" href={item.link}>
                    {item.icon}
                  </a>
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
