import MainTitle from "../standalone/MainTitle";
import Terminal from "../standalone/Terminal";
import { useGlitch } from "react-powerglitch";
import { about } from "../../store/Data";
import { images } from "../../assets/images/index";

import "../../stylesheets/sections/AboutSection.css";

const AboutSection = () => {
  const glitch = useGlitch({
    timing: {
      duration: 2650,
    },
    glitchTimeSpan: {
      start: 0.61,
    },
    shake: {
      velocity: 1,
      amplitudeX: 0,
      amplitudeY: 0,
    },
    slice: {
      count: 11,
      maxHeight: 0.02,
      hueRotate: false,
    },
  });

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-terminal">
          <Terminal text={about} />
        </div>
        <div className="cover-image-container">
          <img
            src={images.coverImage}
            ref={glitch.ref}
            className="cover-image"
          />
        </div>
      </div>
      <MainTitle text="Sameer Trivedi" />
    </div>
  );
};

export default AboutSection;
