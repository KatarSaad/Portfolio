import React, {useState} from 'react';
import styled,{keyframes} from 'styled-components';
import ProjectPage from "./ProjectPage";
import { useNavigate } from 'react-router-dom';
import { FadeCover } from './Animations';
import git from "./Brands/github.png"
import { GlowingButton2, SocialMediaLogo } from './ProjectPage';
import { SkillTag,TextMod, } from './StyledComp';
import { GlowingLine,LineTextContainer } from './App';


// SCSS variables to JS constants
const blue = "#341cac";

const borderGlowAnimation = keyframes`
    0% {
        box-shadow: 0 0 5px #00FFAB;
    }
    50% {
        box-shadow: 0 0 20px #00FFAB, 0 0 30px #00FFAB;
    }
    100% {
        box-shadow: 0 0 5px #00FFAB;
    }
`;

// Styled components
export const CardContainer = styled.article`
  min-width: 700px; // Full width for mobile
  display: block;
  margin: 30px;

  background: #B8F1B0;
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);

  transition: .25s;

  &:hover {
    box-shadow: 5px 2.5px 20px 10px darken(${blue}, 10%);
    cursor: pointer;
  }

  @media (max-width: 701px) {
    min-width: 400px; // Full width for mobile
    margin: 15px;  // centering for mobile

  }
  
  &::before, &::after {
    content: "";
    position: absolute;
    z-index: 1;
    transition: all 0.5s ease;
    background: #00FFAB;
    animation: ${borderGlowAnimation} 1.5s infinite alternate;
  }
  
 
  
  // Left border
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    box-shadow: 0 0 10px #00FFAB, 2px 0 5px #00FFAB;
  }
  // Right border
  &::before {
    top: 0;
    right: 0;  // adjusted to right for right border
    height: 100%;
    width: 4px;
    box-shadow: 0 0 10px #00FFAB, -2px 0 5px #00FFAB;
  }


`;
const TagsContainer = styled.div`
  display: flex;
  margin-top:20px;
  padding-left:10px;
  height:70px;
  flex-wrap: wrap; // If tags exceed the container width, they will wrap to the next line
  margin-bottom:2px;
  
`;

const VisitContainer = styled.div`
  position: absolute; // added this line
  bottom: 10px;  // added this line: distance from the top edge of CardHeader
  right: 10px;  // added this line: distance from the right edge of CardHeader
  display: flex;
  align-items: center; 
  gap: 10px;
  z-index: 10;  // added this line to ensure it's above the CardHeader content
`;


const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const CardHeader = styled.div`
  position: relative;  // added this line
  height: 350px;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  color: #fff;
  // Top border
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #00FFAB;
    box-shadow: 0 0 10px #00FFAB, 0 2px 5px #00FFAB;
    animation: ${borderGlowAnimation} 1.5s infinite alternate;
  }
`;


const CardHeaderTitle = styled.h1`
  text-transform: uppercase;
  margin: 0;
      font-family: 'Cutive Mono', monospace;

  padding: 20px 0;  // Added some vertical padding for space
  white-space: normal;  // Ensures text wraps normally
  overflow-wrap: break-word;  // Breaks long words if they overflow container
`;

const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;  // Vertically center-align the text and tags
`;


const CardBody = styled.div`
  display: flex;
  max-width: 100%;
  
  flex-direction: column;
  background-color: transparent;
  padding: 0px; // Consistent padding around the body for spacing
  
  // Bottom border
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #00FFAB;
    box-shadow: 0 0 10px #00FFAB, 0 -2px 5px #00FFAB;
    animation: ${borderGlowAnimation} 1.5s infinite alternate;
  }
`;

const DateText = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: grey;
  margin-bottom: 1rem; // Space below the date
`;

const BodyContent = styled.p`
padding-bottom: 0px;
  font-family: 'Roboto';
  weight:800;
color:black;
margin-top:0px;
padding-left:10px;

padding-bottom: 0px;
font-size: 22px;
min-height:200px;
max-height: 250px;
line-height: 1.6;
white-space: normal; // Ensures that text behaves like a typical paragraph
overflow-wrap: break-word; // Similar to word-wrap, but more comprehensive
overflow-y: auto; // Makes the content vertically scrollable if it exceeds max-height
margin-bottom: 0; // Provide spacing to ensure it doesn't overlap with the next element
`;

const ButtonPrimary = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #E8FFCE;
  font-size: 25px;
  transition: .25s;
  margin-top: auto; // Push the button to the bottom if there's space
`;
export const ButtonWrapper = styled.div`
  position: absolute;  // Use absolute positioning
  bottom: -20px;  // Push the button 10px from the bottom of CardBody
  left: 50%;  // Center the button horizontally
  transform: translateX(-50%);  // This ensures the centering is perfect, translating half the width of the button to the left
  display: flex;
  justify-content: center;
  align-items: center;
    z-index: 10;  // added this line to ensure it's above the CardHeader content

  width: auto;  // Change this from 100% to auto, so the width is based on the content
`;





// Usage example:
// <ButtonWrapper>
//   <GlowingButton2>Your Button Text</GlowingButton2>
// </ButtonWrapper>


// Main component
const Card = ({ image, title, text, project,skills,technologies }) => {
  const [showProject, setShowProject] = useState(false);  // Create a state
  const navigate = useNavigate();

  // Function to handle the button click
  const handleReadMoreClick = () => {
    console.log(project);
    navigate(`/project/${project.id}`,{state:project});

  };

 
  return(
 
    <CardContainer>
    <CardHeader image={image}>
        <VisitContainer>
          {/* (repeated 3 times for illustrative purposes) */}
          <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
            <SocialMediaLogo src={git} alt="GitHub Logo" />
          </GlowingButton2>
           <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
            <SocialMediaLogo src={git} alt="GitHub Logo" />
          </GlowingButton2>
           <GlowingButton2 bgColor="#C3EDC0" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
            <SocialMediaLogo src={git} alt="GitHub Logo" />
          </GlowingButton2>
        </VisitContainer>
        <CardHeaderTitle>{title}</CardHeaderTitle>
      </CardHeader>
      <CardBody>

     

        {/* 2. Title */}

        {/* 3. Date */}
        <TextMod size="13px" color="grey">{new Date().toLocaleDateString()}</TextMod> 

        {/* 4. GlowingLine */}
        <GlowingLine width="95%" height="2px" />

        {/* 5. Description */}
        <BodyContent>{text}</BodyContent>

        {/* 6. GlowingLine */}
        <LineTextContainer>
      skills
    </LineTextContainer>
      
          {/* Skills */}
          <SkillsWrapper>
            <TagsContainer>
              {skills?.map(skill => (
                <TextMod key={skill} size="13px" font="Gruppo" weight="1000">
                  <SkillTag>{skill}</SkillTag>
                </TextMod>
              ))}
            </TagsContainer>
          </SkillsWrapper>

          <LineTextContainer>
      Technologies
    </LineTextContainer>

          {/* Technologies */}
          <SkillsWrapper>
            <TagsContainer>
              {technologies?.map(tech => (
                <TextMod key={tech} size="15px" font="Gruppo" weight="1000">
                  <SkillTag>{tech}</SkillTag>
                </TextMod>
              ))}
            </TagsContainer>
          </SkillsWrapper>
          
        {/* 8. Read More Button */}
      
      </CardBody>
    <ButtonWrapper>
          <GlowingButton2 onClick={handleReadMoreClick} bgColor="#00FFAB" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
            Read More 
          </GlowingButton2 >
        </ButtonWrapper>
  </CardContainer>
  );
  };

export default Card;
