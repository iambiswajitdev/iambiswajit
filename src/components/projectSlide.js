import React from "react";
import { Carousel } from "react-bootstrap";
const ProjectSlide = ({ projectList }) => {
  return (
    <div className="slider">
      <Carousel>
        {projectList.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="project_slide" src={item.img} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlide;
