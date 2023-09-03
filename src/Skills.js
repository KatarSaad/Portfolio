import React from 'react';
import styled ,  {keyframes}from 'styled-components';
import { Card, CardHeader, CardContent, Typography, LinearProgress } from '@mui/material';
import Level from "./Level"
import SkillCard  from './SkillCard';
import images from './images'; // adjust the path if needed
import architect from "./images/architechture.png"
import csharp from "./images/c-sharp.png"
import react from "./images/physics.png"
import html from "./images/html-5.png"
import ai from "./images/smartphone.png"
import datastructure from "./images/data-structure.png"
import erp from './images/erp.png'
import asp from "./images/web.png"
import server from "./images/server.png"
import ui from './images/ux-interface.png'
import phone from "./images/smartphone (1).png"
import creativity from "./images/creativity.png"

import { SlideInLeftDelay } from './Animations';
const upDownAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
 export const glowingAnimation2 = keyframes`
0% {
  box-shadow: 0 0 1px #00DFA2;
}
50% {
  box-shadow: 0 0 3px #00DFA2, 0 0 8px #00DFA2;
}
100% {
  box-shadow: 0 0 2px #00DFA2;
}
`;
const SkillsContainer = styled.div`
  display: grid; // Change flex to grid
  grid-template-columns: 1fr 1fr; // Creates two equal-width columns
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left:50px;
  padding-right:100px;

  @media (max-width: 768px) {
    height: auto; // Dynamic height based on content for mobile
    padding-left:5px;
    padding-right:5px;


  }


  overflow-y: auto;
  min-width:100px;
  height: 880px;
  margin: 0;
  margin-bottom:155px;
  background: transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  align-items: start; // Grid items should start at the top of their cell

  &::-webkit-scrollbar {
    display: none;
  }
 

  scrollbar-width: none;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1180px;
  align-items: center;  // This centers its children horizontally
  position: relative;
  animation: ${upDownAnimation} 2s infinite;
  margin-bottom: -50px;

  &::after, &::before {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
  }

  &::after {
    left: 280px;
    right: 10px;
    top: 0; // This sets the horizontal line at the top
  }

  &::before {
    left: 350px;
    right: 0;
    bottom: 0; // This sets the horizontal line at the bottom
  }

  @media (max-width: 708px) {
    height: auto; // Dynamic height based on content for mobile
    padding-top:50px;

 
    } 
  }
`;

const TopImage = styled.img`
  margin-bottom: 5px;  // Adjust as needed to remove any space between the image and SkillsContainer
  margin-top:47px;
  margin-left:-44px;
  z-index: 1;
`;
const BottomImage = styled.img`
  margin-bottom: 50px;  // Adjust as needed to remove any space between the image and SkillsContainer
  margin-top:30px;
  margin-left:-44px;
  z-index: 1;
`;




const Skills = () => {
  const halfLength = images.length / 2;
  const firstHalfImages = images.slice(0, halfLength);
  const secondHalfImages = images.slice(halfLength);
  const technicalSkillsData = [
    {
      title: "Programming Languages",
      image: architect,
      skills: [
        { name: "Python", description: "A versatile programming language popular for AI and web development." },
        { name: "C#", description: "A modern, object-oriented programming language designed for building Windows applications." },
        { name: "C/C++", description: "Efficient, low-level languages often used for systems programming." },
        { name: "Java", description: "A high-level, class-based, object-oriented programming language." },
        { name: "Dart", description: "A client-optimized programming language for building mobile, desktop, and web apps." }
      ]
    },
    {
      image:ai,
      title: "Artificial Intelligence",
      skills: [
        {
          name: "AI & Neural Networks",
          description: "Experience with AI and neural networks, specifically in computer vision."
        },
        {
          name: "Computer Vision",
          description: "Skilled in Python, MediaPipe, and OpenCV."
        }
      ]
    },
    { image:server,
      title: "Internet of Things & Big Data",
      skills: [
        { name: "IoT Concepts", description: "Practical understanding of IoT concepts." },
        { name: "Big Data & Visualization", description: "Experience in Big Data processing using Hadoop and Power BI for data visualization." }
      ]
    },
    {image:creativity,
      title: "Mobile Development",
      skills: [
        { name: "Mobile App Development", description: "Proficient in mobile application development using Flutter, Dart, and Swift for both Android and iOS." }
      ]
    },
    {
      image:react,
      title: "Front End Development",
      skills: [
        { name: "Web Technologies", description: "Skilled in JavaScript, HTML, CSS, and React." }
      ]
    },
    { image:ui,
      title: "UI/UX",
      skills: [
        { name: "User Persona", description: "Creating detailed representations of the target user." },
        { name: "User Story", description: "Descriptive narratives conveying user's needs." },
        { name: "UI/UX Practices", description: "Utilizing best practices to create user-centric designs." }
      ]
    },
    {image:erp,
      title: "ERP Systems",
      skills: [
        { name: "365 Dynamics", description: "Experience with Microsoft's enterprise resource planning solution." },
        { name: "Workflows", description: "Designing and executing automated actions triggered by specific criteria." },
        { name: "Odoo", description: "Open source ERP and CRM." }
      ]
    },
    {
      image:asp,
      title: "Back End Development",
      skills: [
        { name: "Back-end Technologies", description: "Expertise in back-end technologies including Firebase, Spring Boot, ASP.NET, and more." },
        { name: "OOP & SQL", description: "Strong understanding of OOP principles and SQL, with hands-on experience on Linux." },
        { name: "ASP.NET", description: "Framework for building web apps and services with .NET and C#." },
        { name: "Spring Boot", description: "Java-based framework used to create stand-alone, production-grade Spring-based applications." }
      ]
    },
    {
      image:architect,
      title: "Software Architecture & Design",
      skills: [
        { name: "Software Architecture", description: "Solid understanding of software architecture, UML, and design patterns." },
        { name: "Clean Architecture", description: "A layered architecture strategy that separates software in terms of its domain." },
        { name: "DDD (Domain Driven Design)", description: "An approach to software design that prioritizes the project's core domain." },
        { name: "Component Diagram", description: "Used to visualize the structural relationships between system components." },
        { name: "SOLID Principles", description: "A set of object-oriented design principles ensuring a system is easy to maintain and scalable." },
        { name: "Dependency Understanding", description: "Clear insight into inter-module dependencies and how to optimize them." }
      ]
    },
    {
      image:server,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", description: "Experience with Amazon Web Services, a comprehensive cloud computing platform." },
        { name: "Git", description: "Distributed version control system for tracking changes." },
        { name: "DevOps", description: "Philosophy combining software development (Dev) with IT operations (Ops) aiming to shorten the system development life cycle." },
        { name: "Docker", description: "Platform to develop, ship, and run applications in containers." }
      ]
    },
    {
      image:datastructure,
      title: "Programming Best Practices",
      skills: [
        { name: "Design Patterns", description: "Best practices solutions to common problems which can be repeatedly used." },
        { name: "Clean Code", description: "Writing code in a readable and maintainable fashion." },
        { name: "Documentation", description: "The process of providing an understanding of the methods and techniques used in software." },
        { name: "Performance Optimized Code", description: "Writing code that runs efficiently and doesn't waste resources." }
      ]
    },
    {image:creativity,
      title: "Soft Skills",
      skills: [
        { name: "Problem-solving & Critical Thinking", description: "Proven problem-solving skills, critical thinking, and creativity." },
        { name: "Communication & Leadership", description: "Excellent communication. Strong leadership and teamwork abilities." },
        { name: "Emotional Intelligence & Adaptability", description: "Emotional intelligence and adaptability." }
      ]
    }
  ];
  
  
  return (
    <Wrapper>
       <div>
            <ImageList>
                {firstHalfImages.map((image, index) => (
                    <SlideInLeftDelay key={index} delayIncrement={index * 0.2}>
                        <StyledImage src={image} alt={`Gallery ${index}`} />
                    </SlideInLeftDelay>
                ))}
            </ImageList>

            <ReverseImageList>
                {secondHalfImages.map((image, index) => (
                    <SlideInLeftDelay key={index + halfLength} delayIncrement={index * 0.2}>
                        <StyledImage src={image} alt={`Gallery ${index + halfLength}`} />
                    </SlideInLeftDelay>
                ))}
            </ReverseImageList>
        </div>
    <SkillsContainer>
      {technicalSkillsData.map(category => <SkillCard image={category.image} key={category.title} category={category} />)}
    </SkillsContainer>

  </Wrapper>
  );
};

export default Skills;
const ImageList = styled.div`
    display: flex;
    flex-direction: row; // default value, added for clarity
    justify-content: space-between;
    flex-wrap: wrap; // this will wrap items to the next line when they run out of space


    `;

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 30px; // This ensures there's a 20px space between images
    margin-right: 70px; // This ensures there's a 20px space between images
     
  @media (max-width: 768px) {
    width: 40px; // Smaller images on mobile
    height: 40px;
    margin-right: 5px;
    margin-left: 5px;

    h
  }

`;

const ReverseImageList = styled(ImageList)`
    flex-direction: row-reverse; // This will make the items go from right to left
`;
