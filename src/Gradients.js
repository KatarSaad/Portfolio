import React from 'react';
import styled, { keyframes } from 'styled-components';

const rainbowAnimation = keyframes`
  0% { background-position: 100% 0%; }
  100% { background-position: 0% 100%; }
`;

const AnimatedGradientBox = styled.div`
  width: 300px;
  height: 200px;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 300% 300%;
  animation: ${rainbowAnimation} 5s infinite;
`;

const GradientAnimationDisplay = () => {
  return <AnimatedGradientBox />;
};

export default GradientAnimationDisplay;
    