import "animate.css/animate.compat.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import "../../stylesheets/standalone/Toffee.css";

function Toffee(props) {
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
    size = "5rem";
    fontSize = "0.75rem";
  } else if (width <= 1000 && width > 600) {
    size = "5rem";
    fontSize = "2rem";
  } else {
    size = "3rem";
    fontSize = "2rem";
  }
  return (
    <motion.div ref={ref} animate={animation}>
      <div className="card" style={{ width: size, height: size }}>
        <div className="first-content">
          <img
            src={props.src}
            style={{ width: size, display: "inline" }}
            alt="Toffee"
          ></img>{" "}
        </div>
        <div className="second-content">
          <span style={{ fontSize: fontSize }}>{props.name || "Name"}</span>
        </div>
      </div>
    </motion.div>
  );
}
export default Toffee;
