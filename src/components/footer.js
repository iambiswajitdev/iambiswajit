import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="footerHeading">
              Made with ❤️ by Biswajit Mondal @ {new Date().getFullYear()} .
              Built with React JS
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
