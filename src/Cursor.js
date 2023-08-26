import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  mix-blend-mode: difference;
  backdrop-filter: blur(0.1px);
  z-index: 9999;
  transition: transform 0.1s, opacity 0.1s;
  transform: translate(-50%, -50%);
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;
