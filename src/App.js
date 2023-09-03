import React,{useRef,useState,useEffect} from 'react';
import styled ,{keyframes}from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import { useScroll } from './Content';
import { HashLink as Link } from 'react-router-hash-link';


// Import your image
import profileImage from './IMG_0178__1_-removebg-preview.jpg';
import  Cursor  from './Cursor';
import { GradientBackground } from './StyledComp';
import {Icon} from './Animations'
import  git from './Brands/github.png'

import linkedIn from './Brands/linkedin.png'
import google from './Brands/google.png'
import { GlowingButton2, SocialMediaLogo as S } from './ProjectPage';



const   Sidebar = (props) => {
  const sectionRef = useRef(null);
  const scrollToSection = useScroll();
 
  return (
    <SidebarContainer backgroundColor="#14C38E" borderColor="#0C356A">
    <GradientWrapper direction="to bottom" startColor="#14C38E" endColor="#00FFAB">
      <Spacer height="50px"/>
      <GlowingLine width="100%" height="2px" />

    <Icon delay={0.1}>  <Name scrollPercentage={props.scrollPercentage}>SAAD KATAR</Name></Icon>
      <GlowingLine width="100%" height="2px" />
      <Spacer height="20px"/>

      <GlowingLine width="80%" height="2px" />
      

      <Icon delay={0.2}>   <JobTitle scrollPercentage={props.scrollPercentage}>JUNIOR SOFTWARE ENGINEER</JobTitle> </Icon>
      <GlowingLine width="80%" height="2px" />
      <Spacer height="20px"/>

    
      <Icon delay={0.4}>   <NavContainer>
      <GlowingLine width="100%" height="2px" />
      
      <StyledLink smooth to="/#about" >
          <GlowsText color="#63686E">ABOUT</GlowsText>
          <span></span> {/* This span is responsible for the line animation */}

        </StyledLink>
      
      <StyledLink smooth to="/#skills" >
          <GlowsText color="#63686E">SKILLS</GlowsText>
          <span></span> {/* This span is responsible for the line animation */}

        </StyledLink>

        <StyledLink smooth to="/#experience"
>
        <span></span> {/* This span is responsible for the line animation */}
          <GlowsText  color="#63686E">EXPERIENCE</GlowsText>
    
        </StyledLink>

        <Spacer height="10px" />
        
        <StyledLink smooth to="/#projects" >
          <GlowsText  color="#63686E">PROJECTS</GlowsText>
          <span></span> {/* This span is responsible for the line animation */}

        </StyledLink>

        <Spacer height="10px" />


        <Spacer height="10px" />

        <StyledLink smooth to="/#contact">
          <GlowsText color="#63686E">CONTACT</GlowsText>
          <span></span> {/* This span is responsible for the line animation */}

        </StyledLink>
      </NavContainer>
      </Icon>

      <GlowingLine width="100%" height="2px" />

      <SocialMediaContainer>
    
      <a href="https://github.com/KatarSaad" target="_blank" rel="noopener noreferrer">
    <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={git} alt="GitHub Logo"/>
    </GlowingButton2>
</a>

<a href="https://www.linkedin.com/in/saad-katar-b72864218/" target="_blank" rel="noopener noreferrer">
    <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={linkedIn} alt="linkedin Logo"/>
    </GlowingButton2>
</a>

<a href="mailto:Katarsaad@gmail.com" target="_blank" rel="noopener noreferrer">
    <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={google} alt="Gmail Logo"/>
    </GlowingButton2>
</a>

  {/* ... any other logos */}
  {/* ... any other logos */}
</SocialMediaContainer>
    </GradientWrapper>

  
  </SidebarContainer>
  );
};

export default Sidebar;




// Animations
const moveContainer = keyframes`
  0% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(-2px);
  }
`;
const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 1px #FFF3E1;
  }
  50% {
    box-shadow: 0 0 20px #FFF3E1, 0 0 3px #FFF3E1;
  }
  100% {
    box-shadow: 0 0 1px #FFF3E1;
  }
`;
const glowingBorderAnimation = keyframes`
  0% {
    box-shadow: 3px 0 1px #00ff00;
  }
  50% {
    box-shadow: 3px 0 20px #00ff00, 3px 0 3px #00ff00;
  }
  100% {
    box-shadow: 3px 0 1px #00ff00;
  }
`;

const glowingTextAnimation = keyframes`
  0% {
    text-shadow: 0 0 2px #B7B78A;
  }
  50% {
    text-shadow: 0 0 4px #B7B78A, 0 0 2px #B7B78A;
  }
  100% {
    text-shadow: 0 0 2px #B7B78A;
  }
`;

// Sidebar Container with glowing border


// Glowing Text Component
const GlowsText = styled.div`
  font-size: 10px;
  color: ${(props) => props.color || '#00ff00'};
  animation: ${glowingTextAnimation} 1.5s infinite;
`;
export const LineTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  &::before, &::after {
    content: "";
    flex: 1;
    height: ${(props) => props.height || '1px'};
    background-color: #FFF3E1;
    animation: ${glowingAnimation} 1.5s infinite;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;
// Glowing Line (Horizontal & Vertical) Components
export const GlowingLine = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '1px'};
  margin: 0 auto 20px auto;  // Centers the line horizontally
  background-color: #FFF3E1;
  animation: ${glowingAnimation} 1.5s infinite;
`;



// Fixed Logos at the Bottom of the Page
const FixedLogoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const GlowingLogo = styled.img`
  width: ${(props) => props.size || '50px'};
  animation: ${glowingAnimation} 1.5s infinite;
`;

// Text Alignment Component
const TextAlign = styled.div`
  text-align: ${(props) => props.align || 'left'};
`;

// Gradient Background Wrapper
const GradientWrapper = styled.div`
height:100%;
  background: linear-gradient(${(props) => props.direction || 'to right'}, ${props => props.startColor || '#5F7161'}, ${props => props.endColor || '#6D8B74'});
  padding: ${(props) => props.padding || '0'};
  margin:0;
  
`;

// Generic Container
const Container = styled.div`
  padding: ${(props) => props.padding || '20px'};
  margin: ${(props) => props.margin || '0'};
  border: ${(props) => props.border || 'none'};
`;

// Spacer Component
const Spacer = styled.div`
  height: ${(props) => props.height || '20px'};
  width: ${(props) => props.width || '20px'};
`;

// Button Component
const Button = styled.button`
  padding: ${(props) => props.padding || '10px 20px'};
  background-color: ${(props) => props.bgColor || '#00ff00'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '5px'};
`;

// Icon Component


// Tooltip Component
const Tooltip = styled.span`
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%; 
  margin-left: -60px; 
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const Name = styled.h1`
font-family: 'Gruppo';
font-weight: 800;
  font-size: 15px;
  color: #122D42;
  margin-bottom: 1rem;
  margin-left: 3px;
    text-align: center;

`;

const JobTitle = styled.h2`
  font-family: 'Gruppo',sans-serif;
  font-size: 15px;
  font-weight: 700;

  color: #122D42;
  margin-bottom: 2rem;
  margin-left: 3px;
    text-align: center;

`;


const SidebarContainer = styled.div`
  position: relative;
  // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for Firefox
  scrollbar-width: none;

  background:  #14C38E;
  height: 100%; // This ensures it covers the entire viewport height
  width: 80px;
  min-width:80px;
  min-height:100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
  padding: 0;
  margin:0;
  // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for Firefox
  scrollbar-width: none;
    animation: ${moveContainer} 4s infinite;
    @media (max-width: 768px) { // Tablet breakpoint
      width: 100px;
      min-width:100px;
    }
    @media (max-width: 480px) { // Smartphone breakpoint
      width: 80px;
      min-width:80px;
    }
  z-index:1;

  
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); // Shadow for elevation
`;


const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  margin-top:20px;
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }

  
`;

const WholeApp = styled.div`
  transition: 0.3s;
  &:hover {
    filter: brightness(1.1) blur(5px);
  }
`;
const StyledLink = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 7px!important;
  color: #444941;
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
  
  text-decoration: none;
 margin-left: 5px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-bottom:20px;

  span {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #B7B78A;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #444941;
  }

  &:hover span {
    width: 100%;!important
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  
  margin-top:150px;
  padding-left:30%;
  flex-direction: column;
  width: 100%; // Set a fixed width temporarily to ensure logos fit inside
`;

const SocialMediaLogo = styled.img`
  width: 20px; // Set a fixed width to visualize the logo
  height: 20px;
  margin: 0px ;
  margin-left:0;


  &:nth-child(odd) {
    margin-left: 0px;
    margin-right: auto;
  }
  
  &:nth-child(even) {
    margin-left: auto;
    margin-right: 10px;
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top:0px;
`;



