import "../../stylesheets/standalone/Terminal.css";
import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

// Custom hook to get current window dimensions and orientation
const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const isLandscape = width > height;
    return { width, height, isLandscape };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

function Terminal({ sizer, text, isHtml }) {
  const { width, height, isLandscape } = useWindowDimensions();
  const htmlContentRef = useRef(null);

  // Update terminal text automatically in HTML mode
  useEffect(() => {
    if (isHtml) {
      htmlContentRef.current.innerHTML = text;
    }
  }, [text]);

  // Calculate terminal dimensions based on orientation
  const getTerminalStyle = () => {
    
    if (isLandscape) {
      // Desktop/landscape
      return {
        width: "40vw",
        minHeight: "45vh",
        maxHeight: "60vh",
      };
    } else {
      // Portrait
      return {
        width: "80vw",
        minHeight: "25vh",
        maxHeight: "80vh",
      };
    }
  };

  return (
    <div className="terminal" style={getTerminalStyle()}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          {[
            { color: "#ff5f57", name: "close" },
            { color: "#ffbd2e", name: "minimize" },
            { color: "#28ca42", name: "maximize" }
          ].map(({ color, name }) => (
            <div
              key={name}
              className="terminal-button"
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <div className="terminal-title">grep -r 'why' life/</div>
        <div className="terminal-spacer"></div>
      </div>
      <div className="terminal-content">
        {isHtml ? (
          <div 
            ref={htmlContentRef}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "white",
              opacity: 1,
              overflow: "auto",
            }}
          />
        ) : (
          <TypeAnimation
            sequence={text}
            speed={65}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "white",
              opacity: 1,
              textOverflow: "clip",
            }}
            repeat={Infinity}
            omitDeletionAnimation
          />
        )}
      </div>
    </div>
  );
}

export default Terminal;