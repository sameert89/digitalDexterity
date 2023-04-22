import '../stylesheets/BlogPreview.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import React, { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
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
        transition: { type: 'spring', duration: 2 }
      })
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: '2vh'
      })
    }
  }, [inView, animation]);
  const { height, width } = useWindowDimensions();
  if (width > 100) {
    const prevWidth = 0.8 * width;
    const prevHeight = 0.40 * height;
    return (
      <motion.div ref={ref} animate={animation} className='blog-container' style={{ width: prevWidth, height: prevHeight }}>
        <img src={props.img} style={{ height: 0.8 * prevHeight }} alt='BlogImage'></img>
        <div className="text">
          <div className='heading' style={{ fontSize: 0.03 * prevWidth }}>{props.title}</div>
          <div className='content' style={{ fontSize: 0.0165 * prevWidth }}>{props.content}</div>
        </div>
      </motion.div>
    );
  }
  else {
    return (<div>This webpage is not optimized for your device, we are working on it</div>)
  }
}

export default BlogPreview;