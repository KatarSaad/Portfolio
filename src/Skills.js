import React from 'react';
import styled ,  {keyframes}from 'styled-components';
import { Card, CardHeader, CardContent, Typography, LinearProgress } from '@mui/material';
import Level from "./Level"
import SkillCard  from './SkillCard';
import chevronUp from "./Arrows/chevron-up-sm.png"

import chevronDown from "./Arrows/chevron-down-sm.png"
const upDownAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const glowingAnimation2 = keyframes`
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

  


  overflow-y: auto;
  min-width:100px;
  height: 1080px;
  margin: 0;
  margin-bottom:-55px;
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
  align-items: center;  // This centers its children horizontally
  position: relative;
  animation: ${upDownAnimation} 2s infinite;
  margin-bottom:-50px;

  &::after {
    content: "";
    position: absolute;
    left: 280px;
    right: 10px;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
    top: 0; // This sets the horizontal line at the top
  }
  &::before {
    content: "";
    position: absolute;
    left: 350px;
    right: 0;

    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
    top: 100%; // This sets the horizontal line at the top
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
  const skillsData = [
    // ... (Rest of your categories remain unchanged)
    {
      title: "Frameworks & Libraries",
      logoSrc: "https://img.icons8.com/color/50/000000/framework.png", // Placeholder logo
      skills: [
        { 
          name: "Spring Boot", 
          logoSrc: "https://img.icons8.com/color/50/000000/spring-logo.png",
          description: "A Java-based framework used to create stand-alone, production-grade Spring-based applications."
        },
        { 
          name: "Node.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/nodejs.png",
          description: "A JavaScript runtime environment that allows executing JavaScript outside of a browser."
        },
        { 
          name: "Express.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/express.png", // Placeholder logo
          description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        },
        { 
          name: "Vue.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/vue-js.png",
          description: "A progressive JavaScript framework for building user interfaces."
        },
        { 
          name: "Angular", 
          logoSrc: "https://img.icons8.com/color/50/000000/angularjs.png",
          description: "A platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages."
        }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      logoSrc: "https://img.icons8.com/color/50/000000/groups.png", 
      skills: [
        { 
          name: "Problem Solving", 
          logoSrc: "https://img.icons8.com/color/50/000000/brain.png",
          description: "The ability to find solutions to difficult or complex issues."
        },
        { 
          name: "Teamwork", 
          logoSrc: "https://img.icons8.com/color/50/000000/team.png",
          description: "Working collaboratively with a group to achieve a common goal."
        },
        { 
          name: "Leadership", 
          logoSrc: "https://img.icons8.com/color/50/000000/conference-call.png",
          description: "The action of leading a group or an organization."
        },
        { 
          name: "Communication", 
          logoSrc: "https://img.icons8.com/color/50/000000/communication.png",
          description: "Effectively exchanging information or ideas with others."
        },
        { 
          name: "Creativity", 
          logoSrc: "https://img.icons8.com/color/50/000000/creative.png",
          description: "The use of imagination or original ideas to create something new or valuable."
        }
      ]
    },
    {
      title: "Frameworks & Libraries",
      logoSrc: "https://img.icons8.com/color/50/000000/framework.png", // Placeholder logo
      skills: [
        { 
          name: "Spring Boot", 
          logoSrc: "https://img.icons8.com/color/50/000000/spring-logo.png",
          description: "A Java-based framework used to create stand-alone, production-grade Spring-based applications."
        },
        { 
          name: "Node.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/nodejs.png",
          description: "A JavaScript runtime environment that allows executing JavaScript outside of a browser."
        },
        { 
          name: "Express.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/express.png", // Placeholder logo
          description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        },
        { 
          name: "Vue.js", 
          logoSrc: "https://img.icons8.com/color/50/000000/vue-js.png",
          description: "A progressive JavaScript framework for building user interfaces."
        },
        { 
          name: "Angular", 
          logoSrc: "https://img.icons8.com/color/50/000000/angularjs.png",
          description: "A platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages."
        }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      logoSrc: "https://img.icons8.com/color/50/000000/groups.png", 
      skills: [
        { 
          name: "Problem Solving", 
          logoSrc: "https://img.icons8.com/color/50/000000/brain.png",
          description: "The ability to find solutions to difficult or complex issues."
        },
        { 
          name: "Teamwork", 
          logoSrc: "https://img.icons8.com/color/50/000000/team.png",
          description: "Working collaboratively with a group to achieve a common goal."
        },
        { 
          name: "Leadership", 
          logoSrc: "https://img.icons8.com/color/50/000000/conference-call.png",
          description: "The action of leading a group or an organization."
        },
        { 
          name: "Communication", 
          logoSrc: "https://img.icons8.com/color/50/000000/communication.png",
          description: "Effectively exchanging information or ideas with others."
        },
        { 
          name: "Creativity", 
          logoSrc: "https://img.icons8.com/color/50/000000/creative.png",
          description: "The use of imagination or original ideas to create something new or valuable."
        }
      ]
    }
  ];

  

  return (
    <Wrapper>
    <TopImage src={chevronUp} alt="Your Alt Text Here" />
    <SkillsContainer>
      {skillsData.map(category => <SkillCard key={category.title} category={category} />)}
    </SkillsContainer>
    <BottomImage src={chevronDown} alt="Your Alt Text Here" />

  </Wrapper>
  );
};

export default Skills;
