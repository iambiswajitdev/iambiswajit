import React from "react";
import { Carousel } from "react-bootstrap";
const ProjectSlide = ({ projectList }) => {
  return (
    <div className="sliderProject">
      <Carousel>
        {projectList.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="project_slide" src={item.img} alt="First slide" />
            <div className="overfolow">
              <a target="_blank" href="https://github.com/iambiswajitdev/">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlide;
