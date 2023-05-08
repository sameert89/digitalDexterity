import "../stylesheets/BlogPreview.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React, { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

function BlogPreview(props) {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 2 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: "2vh",
      });
    }
  }, [inView, animation]);
  const { height, width } = useWindowDimensions();
  let prevHeight, prevWidth, fontSizeT, fontSizeB;
  if (width > 600) {
    prevWidth = 0.8 * width;
    prevHeight = 0.4 * height;
    fontSizeT = 0.03 * prevWidth;
    fontSizeB = 0.0165 * prevWidth;
  } else {
    prevWidth = 0.4 * height;
    prevHeight = 0.4 * height;
    fontSizeT = 0.07 * prevWidth;
    fontSizeB = 0;
  }
  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="blog-container"
      style={{
        width: prevWidth,
      }}
    >
      <img
        src={props.img}
        style={{ height: 0.8 * prevHeight, paddingBottom: "0.5em" }}
        alt="BlogImage"
      ></img>
      <div className="text">
        <div className="heading" style={{ fontSize: fontSizeT }}>
          {props.title}
        </div>
        <div className="prev-content" style={{ fontSize: fontSizeB }}>
          {props.content}
        </div>
      </div>
    </motion.div>
  );
}

export default BlogPreview;
