import Title from "../standalone/Title";
import Toffee from "../standalone/Toffee";
import { images } from "../../assets/images/index";

import "../../stylesheets/sections/SkillsSection.css"

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <Title text="Skills" />
      <div className="skill-grid-container">
        <div className="skill-category">
          <h2 className="skill-section-title">Programming Languages</h2>
          <div className="skill-icon-grid">
            <Toffee name="C++" src={images.cpp}></Toffee>
            <Toffee name="Python" src={images.python}></Toffee>
            <Toffee name="JavaScript" src={images.js}></Toffee>
            <Toffee name="C#" src={images.csharp}></Toffee>
            <Toffee name="Rust" src={images.rust}></Toffee>
          </div>
        </div>
        <div className="skill-category">
          <h2 className="skill-section-title">Frameworks, Libraries & Tools</h2>
          <div className="skill-icon-grid">
            <Toffee name="ASP.NET Core" src={images.aspnetcore}></Toffee>
            <Toffee name="Azure Functions" src={images.azurefunctions}></Toffee>
            <Toffee name="Node.js" src={images.node}></Toffee>
            <Toffee name="React.js" src={images.react}></Toffee>
            <Toffee name="Angular" src={images.angular}></Toffee>
            <Toffee name="Bootstrap" src={images.bootstrap}></Toffee>
            <Toffee name="Tailwind" src={images.tailwind}></Toffee>
            <Toffee name="SQL Server" src={images.sql}></Toffee>
            <Toffee name="MongoDB" src={images.mongo}></Toffee>
          </div>
        </div>
        <div className="skill-category">
          <h2 className="skill-section-title">DevSecOps & Cloud Infra</h2>
          <div className="skill-icon-grid">
            <Toffee name="Azure" src={images.azure}></Toffee>
            <Toffee name="Docker" src={images.docker}></Toffee>
            <Toffee name="Kubernetes" src={images.kubernetes}></Toffee>
            <Toffee name="Github" src={images.github}></Toffee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
