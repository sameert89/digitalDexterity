import React, { useEffect, useRef } from "react";
function MatrixBackground({ timeout = 50 }) {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const width = document.body.offsetWidth;
    // const height = document.body.offsetHeight;
    const height = 1000;
    canvas.current.width = width;
    canvas.current.height = height;

    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    const columns = Math.floor(width / 10) + 1;
    const yPositions = Array.from({ length: columns }).fill(0);

    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
      context.fillStyle = "#0001";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "#fe00f4";
      context.font = "10pt consolas";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 10;
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 100000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 15;
        }
      });
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout]);

  return (
    <div
      style={{
        // WebkitFilter: 'blur(1px)',
        transform: "scale(1.1)",
        background: "#000000",
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -999,
        left: "0",
        top: "0",
      }}
    >
      <canvas ref={canvas} />
    </div>
  );
}

export default MatrixBackground;
