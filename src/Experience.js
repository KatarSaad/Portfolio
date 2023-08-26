import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ExperienceContainer = styled.div`
min-width: 10% !important;
margin-top:0px;

height:100%;
display: flex;
padding-left :100px;
padding-right:200px;
padding-top:100px;
  flex-direction: column;
  align-items: left;
  align-content: left;
  float:left;
  background:transparent;

  animation: 1s ${slideInRight} ease-out;
  
  h1 {
    color: #90C8AC;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }
`;
const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 1px #00DFA2;
  }
  50% {
    box-shadow: 0 0 20px #00ff00, 0 0 3px #00DFA2;
  }
  100% {
    box-shadow: 0 0 1px #00DFA2;
  }
`;

const Card = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: auto;
  width: auto;
  min-width: 10%;
  max-width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
 
  
  border-radius: 0px;
  z-index: 4;
  padding-top: 10px;
  font-family: 'Ubuntu', sans-serif; // Default font for the card

  h4 {
    font-family: 'Cutive Mono', monospace;
    font-weight: bold;
    font-size: 30px;
    color: #E3FCBF; // Changed to color 27374D
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: block;
    color: #rgb(184, 241, 176); // Changed to color 2E4F4F
  }

  p {
    font-size: 20px;
    color: #F6F1E9; // Changed to color 2E4F4F
    
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation} 1.5s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation} 1.5s infinite;
    top: 0; // This sets the horizontal line at the top
  }

  // Create an additional div to represent the bottom line
  & > div.bottomLine {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation} 1.5s infinite;
    bottom: 0; // This sets the horizontal line at the bottom
  }
`;
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer at Google",
      duration: "Jun 2022 - Present",
      description: "Worked on developing new features and maintaining Google Search."
    },
    {
      title: "Software Engineer Intern at Microsoft",
      duration: "May 2021 - Aug 2021",
      description: "Worked on the Microsoft Teams team, developing new features a44sdqffff fffffffff  fffff fffff fffff ffq fqsfd fds qfffff fffffffffff  fffffffff q sdfqsdf qsdf qsdf qsdf qsdf sqdf f dsnd fixin bugs."
    }
    // Add more experiences here
  ];

  return (
    <ExperienceContainer start="#5C8374" end="#5C8374" direction="to bottom right">
      {experiences.map((exp, index) => (
        <Card key={index} >
          <h4>{exp.title}</h4>
          <span>{exp.duration}</span>
          <p>{exp.description}</p>
        </Card>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
