import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const MyProject = () => {
  const projectList = [
    {
      img: "../images/pro1.png",
    },
    {
      img: "../images/pro3.png",
    },
    {
      img: "../images/pro2.png",
    },
    {
      img: "../images/pro4.png",
    },
    {
      img: "../images/pro2.png",
    },
    {
      img: "../images/pro2.png",
    },
  ];
  return (
    <div className="myProjectSection">
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <img className="introImg m-top" src="../images/work.png" alt="" />
          </Col>
          <Col lg={7} xs={12}>
            <h1 className="introHeding contact">my project</h1>
            <p>
              A front end developer has one general responsibility: to ensure
              that website visitors can easily interact with the page. They do
              this through the combination of design, technology and programming
              to code a website's appearance, as well as taking care of
              debugging
            </p>
            <Row>
              {projectList.map((item, index) => (
                <Col lg={4} xs={12}>
                  <div className="workSampel" key={index}>
                    <img src={item.img} alt="" />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProject;
