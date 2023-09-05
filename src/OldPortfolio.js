import React , {useState,useEffect}from 'react';
import { Button } from '@mui/material';
import  git from './Brands/github.png'

import linkedIn from './Brands/linkedin.png'
import google from './Brands/google.png'

import About from './About';
import { SocialMediaLogo } from './App';
import Skills from './Skills';
import CardsList from"./CardsList";
import Particle from "react-tsparticles"
import ParticleConfig  from './ParticleConfig';
import {Header,TextContainer3,TextContainer2} from "./AboutPage"
import M  from "./Modal";
const pdfPath = process.env.PUBLIC_URL + '/1.pdf';
import { Glowing,GlowingButton2 } from './ProjectPage';



import Projects from './Projects';
import styled, { keyframes } from 'styled-components';
import Blog from './Blog';
import Contact from './Contact';
import Experience from './Experience';
import { useViewportScroll, useTransform, m as motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GradientBackground, Spacer,TextMod } from './StyledComp';
import { SlideInLeft,AnimatedText, SlideInRight, Squeeze, Pulse, DivAppear, SlideCover } from './Animations';
import Modal from './Modal';

import ArrowIcon from "./vector-3.png"

import { Link, Element } from 'react-scroll';

// Your styled components here

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 10px;
  cursor: pointer;
`;

const ColorModal = styled.div`
display: ${props => (props.show ? 'flex' : 'none')};  // Conditional rendering

  position: absolute;
  top: 0.5%;  // Adjust to your liking
  left: 50%;
  transform: translateX(-50%);
  gap: 10px;  // Space between circles
`;
const ShowModalButton = styled.button`
position: absolute;

  padding: 10px 15px;
  top: 0.6%;  // Adjust to your liking
  border: none;
  left: 80%;

  background-color: #E8FFCE;
  color: #00DFA2;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  transition: 0.3s;
    align-self: flex-start;  // This line will prevent the button from stretching


  &:hover {
    background-color: #C3EDC0;
  }
`;



const HomePage = ({ref1, ref2, ref3, ref4}) =>{

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [scrollDirection, setScrollDirection] = useState(null);
  
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY;
      console.log(ref1)
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const topRef = React.useRef();
  const bottomRef = React.useRef();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setScrollDirection(entry.target === topRef.current ? 'up' : 'down');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    if(topRef.current) {
      observer.observe(topRef.current);
  }
  if(bottomRef.current) {
      observer.observe(bottomRef.current);
  }
  
    return () => {
      observer.disconnect();
    };
  }, []);
 

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const animation = useAnimation();
  const colors = [
    "#040D12",
    "#33FF57",
    "#5733FF",
    "#FF33F3",
    "#F3FF33",
    "#33F3FF",
    "#8E33FF",
    "#FF8E33"
  ]; 
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Initialize with white color or any color of your choice
  const [showModal, setShowModal] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [animation, inView]);


  return (
    <HomePageContainer>
          <M show={isModalOpen} onClose={() => setIsModalOpen(false)}>
<embed src={pdfPath} type="application/pdf" width="1400px" height="1000px" />
</M>
      
      <GradientBackground startColor= "#040D12" endColor= "#040D12" direction="to bottom">
      <ShowModalButton onClick={() => setShowModal(true)}>
        Change Background Color
      </ShowModalButton>

      <ColorModal show={showModal}>
        {colors.map(color => (
          <ColorCircle 
            key={color}
            color={color}
            onClick={() => {
              setBgColor(color);
              setShowModal(false);  // Hide the modal after selecting a color
            }}
          />
        ))}
      </ColorModal>

      <Fade direction="bottom" top opacity={scrollDirection === 'down' ? 0 : 1} ref={topRef} />

     
      <Header color="#B8F1B0">
            <TextContainer3>     
                         <TextMod font="Pacifico" weight="800" size="38px" color="#345B63" lineHeight="1.8" spacing="3.8"> Saad Katar </TextMod>
                         <TextMod font="Great Vibes" weight="700" size="28px" color="#345B63" lineHeight="1.8" spacing="2.6"> Software Engineer</TextMod>
                       

   </TextContainer3>
       <TextContainer3>
       <TextContainer2> <a href="https://www.linkedin.com/in/saad-katar-b72864218/" target="_blank" rel="noopener noreferrer">
    <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={linkedIn} alt="linkedin Logo"/>
    </GlowingButton2>
</a> <TextMod font="Roboto Slab" weight="00" size="13px" color="#345B63" lineHeight="1.8"spacing="2">.https://www.linkedin.com/in/saad-katar-b72864218/ </TextMod>
</TextContainer2>

<TextContainer2>  <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={google} alt="Gmail Logo"/>
    </GlowingButton2> <TextMod font="Roboto Slab" weight="500" size="13px" color="#345B63" lineHeight="1.8" spacing="2">   Katarsaad@gmail.com </TextMod>
</TextContainer2>

<TextContainer2> <a href="https://github.com/KatarSaad" target="_blank" rel="noopener noreferrer">
    <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
        <SocialMediaLogo src={git} alt="GitHub Logo"/>
    </GlowingButton2>
</a> <TextMod font="Roboto Slab" weight="500" size="13px" color="#345B63" lineHeight="1.8" spacing="2">   https://github.com/KatarSaad </TextMod>
</TextContainer2>


       </TextContainer3>
          <Glowing  onClick={() => setIsModalOpen(true)} bgColor="#00DFA2" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
  CV
</Glowing>
   
       </Header>
     
        <SlideInLeft>
      
     
      <StyledElement  id="about" title=" ABOUT">
      <img src={ArrowIcon} alt="Arrow Icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px' }} />
      
    
</StyledElement>

</SlideInLeft>
   <About /> 
<SlideInLeft>
      <StyledElement  id="skills" title=" SKILLS">
      <img src={ArrowIcon} alt="Arrow Icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px' }} />
      
    
</StyledElement>
</SlideInLeft>
        

        <SlideInRight> 
           <Skills /></SlideInRight>
      
  
      
        <SlideInLeft>
      <StyledElement  id="experience"      title=" EXPERIENCE">
        <Element name="experience">

     <div ></div>   
     </Element>   
    
</StyledElement>
</SlideInLeft>
    
      <DivAppear>  <Experience /> </DivAppear>
      
      <SlideInLeft>
      <StyledElement id="projects" title=" PROJECTS">
      <img src={ArrowIcon} alt="Arrow Icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px' }} />
      
    
</StyledElement>
</SlideInLeft>

        <CardsList/>


  </GradientBackground>
    </HomePageContainer>
  );
};

export default HomePage;

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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

// Define the styled components
const HomePageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start; 
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(0, 0, 34);
  color: white;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  

  &::before {
    content: ""; // Empty content for the pseudo-element
    position: absolute;
    left: 0;
    top: 0px;
    
    bottom: 0; // Extends from top to bottom of the container
    width: 3px; // Width of the vertical line
    background-color: #00DFA2; // Color of the vertical line, change it as required
    animation: ${glowingAnimation} 1.5s infinite;
    z-index:1;
    
  }
`;


const Fade = styled.div`
  position: absolute;
  top: ${props => props.top ? '0' : 'auto'};
  bottom: ${props => props.bottom ? '0' : 'auto'};
  height: 100px;
  pointer-events: none;
  background: linear-gradient(
    to ${props => props.direction}, 
    rgba(0, 0, 34, 1),
    rgba(0, 0, 34, 0)
  );
  transition: opacity 0.5s ease;
  opacity: ${props => props.opacity};
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const StyledButton = styled(Button)`
  && {
    background: white;
    color: #3498db !important;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    &:hover {
      background: #2980b9 !important;
    }
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  width: 80%;
  div {
    width: 40%;
    animation: 2s ${slideInLeft} ease-out;
  }
  
  h1,
  h2,
  p {
    margin-bottom: 20px;
    animation: 2s ${fade} ease-in;
  }
  h1 {
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  h2,
  p {
    font-size: 2em;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
`;
const Section = styled.div`
  background: #ffffff;
  color: #333;
  padding: 2em 0;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
              0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  &:nth-child(even) {
    background: #f0f0f0;
  }
`;
const glowingTextAnimation = keyframes`
  0% {
    text-shadow: 0 0 1px #00DFA2;
  }
  50% {
    text-shadow: 0 0 2px #00DFA2, 0 0 2px #00DFA2;
  }
  100% {
    text-shadow: 0 0 1px #00DFA2;
  }
`;
export const GlowsText = styled.div`
  font-size:${(props) => props.size || '24px'};
  color: ${(props) => props.color || '#00ff00'};
  animation: ${glowingTextAnimation} 1.5s infinite;
`;
const StyledElement = styled(Element)`
    position: relative;
    font-family: 'Orbitron',sans-serif;
    margin-top:50px;
    margin-bottom:0px;
    z-index: 1;  // Ensure this component is stacked above others

  font-size: 40px;
  font-weight: 700;
    padding-left: 3.5rem; // Adjust padding to make space for the icon
    animation:${glowingTextAnimation} 1.5s infinite;

    &::after {
        content: ' ${  props => props.title}';
        position: absolute;
        left: 60px; // Adjust this value based on the icon's width
        top: 50%;
        transform: translateY(-50%);
        white-space: nowrap;
        color: #00DFA2;
        padding: 0.2rem 0.5rem;
    }
`;
