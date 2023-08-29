import React from 'react';
import styled, { keyframes } from 'styled-components';
import  {SlideCoverRight}  from "./Animations"


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
      title: "Internship at ATI (Tunisian Internet Agency)      ",
      duration: "Feburary 2023 - Juin 2023 ",
      description: "Architected and implemented an advanced Intranet solution, enhancing productivity and achieving time savings.The system features a chat service, bug/task management system, and intuitive interfaces for blogs, articles, and news.Demonstrated proficiency in data extraction & reporting from Sage ERP."
    },
    {
      title: "Software Engineering Intern at 3Dwave ",
      duration: "June 2022 - August 2022",
      description: "Developed an AI application with Flutter & Desktop versions targeting Autism and anxiety in children."
    },
    {
      title: "Software Engineering Intern at the University Hospital of Farhat Hached ",
      duration: "February 2022 - May 2022",
      description: "Architected, implemented, and maintained a QR code Access and Disease Prediction solution"
    }
    // Add more experiences here
  ];

  return (
    <ExperienceContainer start="#5C8374" end="#5C8374" direction="to bottom right">
      {experiences.map((exp, index) => (
      <Card key={index} >
          <SlideCoverRight> <h4>{exp.title}</h4></SlideCoverRight> 
          <SlideCoverRight>      <span>{exp.duration}</span></SlideCoverRight> 
          <SlideCoverRight>        <p>{exp.description}</p></SlideCoverRight> 
        </Card>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
