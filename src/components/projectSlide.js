import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
const ProjectSlide = ({ projectList }) => {
  return (
    <div className="sliderProject">
      <Carousel>
        {projectList.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="project_slide" src={item.img} alt="First slide" />
            <div className="overfolow">
              <Row>
                <Col lg={3}></Col>
                <Col lg={2}>
                  <a rel="noreferrer" target="_blank" href={item.link}>
                    <i class="fas fa-link"></i>
                  </a>
                </Col>
                <Col lg={2}>
                  <a
                    className="gitHubLink"
                    rel="noreferrer"
                    target="_blank"
                    href={item.gitHub}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Col>
                <Col lg={3}></Col>
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlide;
