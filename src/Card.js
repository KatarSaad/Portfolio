import React, {useState} from 'react';
import styled from 'styled-components';
import ProjectPage from "./ProjectPage";
import { useNavigate } from 'react-router-dom';
import { FadeCover } from './Animations';


// SCSS variables to JS constants
const blue = "#341cac";

// Styled components
const CardContainer = styled.article`
  width: 600px !important;
  
  min-width: 600px;
  display: block;
  margin: 30px;
  background: rgb(0, 255, 171,0.5);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
  transition: .25s;

  &:hover {
    box-shadow: 10px 5px 40px 20px darken(${blue}, 10%);
    cursor: pointer;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // If tags exceed the container width, they will wrap to the next line
  gap: 10px; // Spacing between tags
`;

const SkillTag = styled.span`
  background-color: #e1e1e1;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Verdana, sans-serif";
  font-weight: normal;
  color: #333;
`;
const VisitContainer = styled.div`
  display: flex;
  align-items: center; // Vertically center-align the logos and text
  gap: 10px;
  margin-top: 20px; // Some spacing from the tags above
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const CardHeader = styled.div`
  height: 350px;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.image});
  color: #fff;
`;

const CardHeaderTitle = styled.h1`
  text-transform: uppercase;
  margin: 0;
  padding: 20px 0; // Added some vertical padding for space
`;

const CardBody = styled.div`
  display: flex;
  max-width: 100%;
  
  flex-direction: column;
  background-color: transparent;
  padding: 20px; // Consistent padding around the body for spacing
`;

const DateText = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: grey;
  margin-bottom: 1rem; // Space below the date
`;

const BodyContent = styled.p`
padding-bottom: 40px;
font-size: 22px;
min-height:350px;
max-height: 350px;
line-height: 1.6;
white-space: normal; // Ensures that text behaves like a typical paragraph
overflow-wrap: break-word; // Similar to word-wrap, but more comprehensive
overflow-y: auto; // Makes the content vertically scrollable if it exceeds max-height
margin-bottom: 1rem; // Provide spacing to ensure it doesn't overlap with the next element
`;

const ButtonPrimary = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: ${blue};
  font-size: 15px;
  transition: .25s;
  margin-top: auto; // Push the button to the bottom if there's space
`;

// Main component
const Card = ({ image, title, text, project }) => {
  const [showProject, setShowProject] = useState(false);  // Create a state
  const navigate = useNavigate();

  // Function to handle the button click
  const handleReadMoreClick = () => {
    console.log(project);
    navigate(`/project/${project.id}`,{state:project});

  };

 
  return(
 
  <CardContainer>
    <FadeCover>   
  <CardHeader image={image}>
    <CardHeaderTitle>{title}</CardHeaderTitle>
  </CardHeader>
  <CardBody>
    <BodyContent>{text}</BodyContent>
    <TagsContainer>
      <SkillTag>React</SkillTag>
      <SkillTag>Redux</SkillTag>
      <SkillTag>Styled-Components</SkillTag>
      {/* ... add other tags here */}
    </TagsContainer>
    <VisitContainer>
      <span>Visit:</span>
      <Logo src="path_to_website_logo.png" alt="Website" />
      <Logo src="path_to_github_logo.png" alt="GitHub" />
      <Logo src="path_to_demo_logo.png" alt="Demo" />
    </VisitContainer>
    <ButtonPrimary onClick={handleReadMoreClick}>
        <i></i> Read More
      </ButtonPrimary>
  </CardBody>
  </FadeCover>

</CardContainer>
  );
  };

export default Card;
