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
              <a target="_blank" href={item.link}>
                <i class="fas fa-link"></i>
              </a>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlide;
