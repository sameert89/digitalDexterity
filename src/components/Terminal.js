import '../stylesheets/Terminal.css';
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
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
function Terminal(props){
    //what will the props have to provide
    //some kind of formatting like whatsapp increasing the size of the text
    //(include it between two *) or a newline character for break
    //the array of texts (in case multipage is needed)
    //alignment of the text
    // const sampleProp = {
    //     pages: ['Type this ~in page 1', 'Type *this* in page 2'],
    //     alignment: 'center, left or right'
    // }
    const {height, width} = useWindowDimensions();
    const tWidth = width/props.sizer.w;
    const tHeight = height/props.sizer.h;
    const buttonDim = tWidth/45;
    return(
        <div className="terminal" style={{width: tWidth, height: tHeight}}>
            <div className='buttons'>
                <div className='button' style={{backgroundColor: 'red', width: buttonDim, height: buttonDim}}></div>
                <div className='button' style={{backgroundColor: 'yellow', width: buttonDim, height: buttonDim}}></div>
                <div className='button' style={{backgroundColor: 'green', width: buttonDim, height: buttonDim}}></div>
            </div>
            <TypeAnimation
                sequence = {props.text}
                speed = {40}
                style = {{fontSize: props.sizer.f, fontFamily: 'Consolas', color: 'white', opacity: 1, padding: '0 1em'}}
                repeat = {Infinity}
                omitDeletionAnimation = {true}
            />
        </div>
    );
}

export default Terminal;