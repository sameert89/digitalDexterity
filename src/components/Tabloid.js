import "animate.css/animate.compat.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "../stylesheets/Tabloid.css";

function Tabloid(props) {
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
  const size = props.size || "14vh";
  return (
    <motion.div ref={ref} animate={animation}>
      <div class="card" style={{ width: size, height: size }}>
        <div class="first-content">
          <img
            src={props.src}
            style={{ width: size, display: "inline" }}
            alt="tabloid"
          ></img>{" "}
        </div>
        <div class="second-content">
          <span>{props.name || "Name"}</span>
        </div>
      </div>
    </motion.div>
  );
}
export default Tabloid;
