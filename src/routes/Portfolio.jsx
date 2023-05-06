/* IMPORTS */

/* Styles */
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/Portfolio.css";
import "../stylesheets/MyEditor.css";

/* External Components */
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import { GlitchImage } from "react-glitch-image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

/* Internal Components */
import MainTitle from "../components/MainTitle";
import Terminal from "../components/Terminal";
import Title from "../components/Title";
import Tabloid from "../components/Tabloid";

/* Fonts */
import "../fonts/consola.ttf";
import "../fonts/os_condensed.ttf";

/* Images */
// import robotMistress from "../images/bicAI.png";
import coverImage from "../images/newPFP.png";
// import pfp from "../images/bitmap.png";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/NODE.png";
import react from "../images/react.png";
import mongo from "../images/mongo.png";
import bootstrap from "../images/bs.png";
import cpp from "../images/c++.png";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import discord from "../images/discord_chat.png";
import project from "../images/project_3.png";
/* Data */
import { term1Text, term2text } from "../store/Data";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

function Portfolio() {
  //for page snap
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 60, delay: 20 });
  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section1">
        <div className="part1">
          <div className="term1">
            <Terminal
              text={term1Text}
              sizer={{ w: 2.7, h: 2.46, f: "1.6vw" }}
            />
          </div>

          <GlitchImage
            image={coverImage}
            width={"30%"}
            animationDuration={10}
            animationInterval={2000}
            activeFxOnHover={0}
            className="coverImage"
          />
        </div>
        <MainTitle text="Digital Dexterity" />
      </div>
      <div className="section2">
        <Title text="About" />
        <div className="about_terminal">
          <TypeAnimation
            sequence={term2text}
            speed={40}
            style={{
              whiteSpace: "pre-line",
              fontFamily: "Consolas",
              color: "white",
              opacity: 1,
              padding: "0 1em",
            }}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
      <div className="section4">
        <Title text="Skills" />
        <div className="icon_set">
          <Tabloid name="HTML" src={html}></Tabloid>
          <Tabloid name="CSS" src={css}></Tabloid>
          <Tabloid name="JavaScript" src={js}></Tabloid>
          <Tabloid name="Bootstrap" src={bootstrap}></Tabloid>
          <Tabloid name="Node.js" src={node}></Tabloid>
          <Tabloid name="React.js" src={react}></Tabloid>
          <Tabloid name="MongoDB" src={mongo}></Tabloid>
          <Tabloid name="C++" src={cpp}></Tabloid>
        </div>
      </div>
      <div className="section3">
        <Title text={"My Projects"} />
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
      <div className="section5">
        <Title text="Contacts"></Title>
        <div className="icon_set">
          <Tabloid name="EMAIL" src={gmail} />
          <Tabloid name="Linkedin" src={linkedin} />
          <Tabloid name="Github" src={github} />
          <Tabloid name="Discord" src={discord} />
        </div>
        <div className="btns">
          <a href="#resumelink">
            <button className="publish contact-button">My Resume</button>
          </a>
          <a href="#hiremelink">
            <button className="publish contact-button">Hire Me!</button>
          </a>
          <Link to="/blog">
            <button className="publish contact-button">My Blog</button>
          </Link>
          <Link to="/contact">
            <button className="publish contact-button">Contact</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
export default Portfolio;
