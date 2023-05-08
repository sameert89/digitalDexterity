import "animate.css/animate.compat.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import "../stylesheets/Tabloid.css";

function Tabloid(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 2 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "2vh",
      });
    }
  }, [inView, animation]);
  let size = 0,
    fontSize = 0;
  if (width > 1000) {
    size = "6vw";
    fontSize = "1vw";
  } else if (width <= 1000 && width > 600) {
    size = "10vw";
  } else {
    console.log("hit 600");
    fontSize = "1vh";
    size = "20vw";
  }
  console.log(width);
  return (
    <motion.div ref={ref} animate={animation}>
      <div className="card" style={{ width: size, height: size }}>
        <div className="first-content">
          <img
            src={props.src}
            style={{ width: size, display: "inline" }}
            alt="tabloid"
          ></img>{" "}
        </div>
        <div className="second-content">
          <span style={{ fontSize: fontSize }}>{props.name || "Name"}</span>
        </div>
      </div>
    </motion.div>
  );
}
export default Tabloid;
