import { images } from "../../assets/images/index";
import Title from "../standalone/Title";
import Carousel from "../standalone/Carousel";
import Terminal from "../standalone/Terminal";
import { projectDescriptions } from "../../store/Data";
import { useState } from "react";

import "../../stylesheets/sections/ProjectsSection.css";

const ProjectsSection = () => {
  const [projectDescription, setProjectDescription] = useState(
    projectDescriptions[0]
  );
  const carouselChangeCallBack = (index) => {
    setProjectDescription(projectDescriptions[index]);
  };
  return (
    <div className="projects-section">
      <Title text={"Projects"} />
      <div className="carousel-container">
        <div className="carousel">
          <img src={images.macbook} alt="macbook" />
          <div className="slideshow">
            <Carousel
              images={[images.blog, images.bitbinder, images.coinkeeper]}
              carouselChangeCallback={carouselChangeCallBack}
            />
          </div>
        </div>

        <Terminal
          text={projectDescription}
          isHtml={true}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
