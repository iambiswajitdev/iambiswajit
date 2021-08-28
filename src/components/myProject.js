import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectSlide from "./projectSlide";
const MyProject = () => {
  const projectList = [
    {
      img: "../images/pro1.png",
      link: "https://ourdailyfood.netlify.app/",
      gitHub: "https://github.com/iambiswajitdev?tab=repositories",
    },
    {
      img: "../images/pro7.png",
      link: "https://myonlineshopping.netlify.app/",
      gitHub: "https://github.com/iambiswajitdev/myshoping",
    },
    {
      img: "../images/pro4.png",
      link: "https://pizzabazaar.netlify.app/",
      gitHub: "https://github.com/iambiswajitdev/pizza_lover",
    },
    {
      img: "../images/pro5.png",
      link: "https://github.com/iambiswajitdev/restaurant",
      gitHub: "https://github.com/iambiswajitdev/restaurant",
    },
    {
      img: "../images/pro6.png",
      link: "https://myonlineshopping.netlify.app/",
      gitHub: "https://github.com/iambiswajitdev/myshoping",
    },
  ];
  return (
    <div className="myProjectSection">
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <img
              className="introImg m-top mobileDesplay"
              src="../images/work.png"
              alt=""
            />
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
            <ProjectSlide projectList={projectList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProject;
