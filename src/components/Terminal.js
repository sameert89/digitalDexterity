// import terminal from '../../public/Terminal.png'
import '../stylesheets/Terminal.css';
import React, { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { term1Text } from '../Data';
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
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      // we use the useEffect hook to listen to the window resize event
      useEffect(() => {
        window.onresize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
      }, []);    
    const tWidth = windowSize.width/2.3;
    const tHeight = windowSize.height/2.46;
    const buttonDim = tWidth/39;
    return(
        <div className="terminal" style={{width: tWidth, height: tHeight}}>
            <div className='buttons'>
                <div className='button' style={{backgroundColor: 'red', width: buttonDim, height: buttonDim}}></div>
                <div className='button' style={{backgroundColor: 'yellow', width: buttonDim, height: buttonDim}}></div>
                <div className='button' style={{backgroundColor: 'green', width: buttonDim, height: buttonDim}}></div>
            </div>
            <TypeAnimation
                sequence = {term1Text}
                speed = {40}
                style = {{fontSize: '1.7em', fontFamily: 'Consolas', color: 'white', opacity: 1}}
                repeat = {Infinity}
                omitDeletionAnimation = {true}
            />
        </div>
    );
}

export default Terminal;