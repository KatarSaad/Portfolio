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

const ExperienceContainer = styled.div`
  width: 90%; // Default width for mobile
  margin: 20px auto;  // Center the container and provide vertical spacing
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px; // Reduced padding for mobile
  align-items: flex-start; // Better syntax instead of 'left'
  background: transparent;
  animation: 1s ${slideInRight} ease-out;

  @media (min-width: 601px) { 
    padding: 50px; 
  }

  @media (min-width: 801px) {
    padding: 100px 200px;
    width: auto;
    min-width: 10%;
    align-items: flex-start; 
  }
  
  h1 {
    color: #90C8AC;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }
`;

const Card = styled.div`
  position: relative;
  margin: 20px auto; // Vertical spacing and horizontal centering
  width: 90%; // Full width for mobile devices
  padding: 20px; // Reduced padding for mobile
  font-family: 'Ubuntu', sans-serif;

  @media (min-width: 601px) {
    width: 80%; // Slightly larger for tablets
    padding: 30px;
  }

  @media (min-width: 801px) {
    width: auto;
    min-width: 10%;
    max-width: 90%;
    padding: 50px;
  }

  h4 {
    font-family: 'Cutive Mono', monospace;
    font-weight: bold;
    font-size: 25px; // Slightly smaller font size for mobile
    color: #E3FCBF;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  span {
    font-size: 0.9rem; // Slightly smaller for mobile
    margin-bottom: 0.5rem;
    display: block;
    color: #rgb(184, 241, 176);
  }

  p {
    font-size: 18px; // Reduced size for mobile
    color: #F6F1E9;
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
    top: 0; 
  }

  & > div.bottomLine {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation} 1.5s infinite;
    bottom: 0; 
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
