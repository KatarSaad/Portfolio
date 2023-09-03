import React ,{useRef, useState,useEffect} from 'react';
import ReactPlayer from 'react-player';
import  PdfViewer  from './PdfViewer';
const pdfPath = process.env.PUBLIC_URL + '/1.pdf';
import {
  ProjectContainer, ProjectTitle, LinksContainer, GradientButton,
  Description, DemonstrationContainer, StepsContainer, StepItem,
  StepDescription, GifContainer, GifImage, Card, PillBadge,
  GradientBackground, CircleExpand, TextMod, GradientText,
  GradientContainer, AnimatedGradient, LineHeightText, HoverGradientShift,
  DashAnimatedLine, LinePulse, GlowingLine, GrowVerticalLine, GrowHorizontalLine,List,ListItem,CardGlassMorphic,TagsContainer,SkillTag,TransparentContainer,Tag,Note,GlowingBall,Title,
  GlassCard, FloatingElement, ExpandingBorderInput, GradientIconFill,FlexRow,CenteredGrowHorizontalLine,CenteredGrowHorizontalLineSmall,CenteredH5,Subtitle,GlowBox,NeumorphicBox,ChangeTextColorOnHover, FlexContainer
} from './StyledComp';
import {useLocation} from "react-router-dom"
import git from "./Brands/github.png"
import styled, { css, keyframes,createGlobalStyle } from 'styled-components';
 const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to bottom, ${props => props.startColor}, ${props => props.endColor});
  }
`;


const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 1px #FFF;
  }
  50% {
    box-shadow: 0 0 5px #FFF, 0 0 13px #FFF;
  }
  100% {
    box-shadow: 0 0 2px #FFF;
  }
`;

const liftEffect = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const GlowingButton = styled.button`
  padding: 10px 20px;
  
  border: 2px solid #FFF;
  background-color: ${props => props.bgColor || '#4A90E2'};
  color: ${props => props.TextColor || '#000'};
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  ${liftEffect}
  
  &:hover {
    animation: ${glowingAnimation} 1.5s infinite;
    color: ${props => props.hoverTextColor || '#000'};
    background-color: ${props => props.bgColorChange || '#4A90E2'};

  }
`;
export const Glowing = styled.button`
padding: 10px 20px;
position: absolute;
bottom: -20px;  // Adjust this to your preference, it's the distance from the bottom
left: 50%;
transform: translateX(-50%); // This is essential to center the button

border: 2px solid #FFF;
background-color: ${props => props.bgColor || '#4A90E2'};
color: ${props => props.TextColor || '#000'};
font-size: 1.5rem;
cursor: pointer;
border-radius: 5px;
outline: none;
z-index:1;
${liftEffect}

&:hover {
  animation: ${glowingAnimation} 1.5s infinite;
  color: ${props => props.hoverTextColor || '#000'};
  background-color: ${props => props.bgColorChange || '#4A90E2'};
}
`;
export const GlowingButton2 = styled.button`
  display: inline-block !important;
  width: auto !important;
  align-self: flex-start;  
  box-sizing: border-box !important;
  margin: 5px !important;
  padding: 5px  ;
  white-space: nowrap !important;  
  border: 1px solid #FFF !important;
  background-color: ${props => props.bgColor || '#4A90E2'} !important;
  color: ${props => props.TextColor || '#000'} !important;
  font-size: 1.5rem !important;
  cursor: pointer !important;
  border-radius: 6px !important;
  outline: none !important;
  ${liftEffect}  
  
  &:hover {
    animation: ${glowingAnimation} 1.5s infinite !important;
    color: ${props => props.hoverTextColor || '#000'} !important;
    background-color: ${props => props.bgColorChange || '#4A90E2'} !important;
  }

  @media (max-width: 600px) {
    margin: 5px !important;
    padding: 5px 10px !important;  // Smaller padding for mobile
    font-size: 1rem !important;  // Smaller font for mobile
    border-radius: 4px !important;  // Slightly smaller border-radius for mobile
  }
`;


export const FlexWrapper = styled.div`
  display: flex;
  align-items: start; // This will align items to the top
`;
const VideoWrapper = styled.div`
  display: flex;
  height:900px;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledReactPlayer = styled(ReactPlayer)`
  border-radius: 10px;
  overflow: hidden;

  & video {
    border-radius: 10px; 
  }
`;



const Project = ({project}) => {
  const location = useLocation();
const projectData = location.state;

  const { title, websiteLink, githubLink, demoLink, description, demonstration } = projectData;
// In your ProjectPage component


  const elementRef = useRef(null);

  const [height, setHeight] = useState(0);
  const elementRef2 = useRef(null);
  const [height2, setHeight2] = useState(0);

  useEffect(() => {
      if (elementRef.current) {
          const elementHeight = `${elementRef.current.clientHeight-50}px`;
          console.log(elementHeight);
          setHeight(elementHeight);
      }
      if (elementRef2.current) {
        const elementHeight2 = `${elementRef2.current.clientHeight-50}px`;
        console.log(elementHeight2);
        setHeight2(elementHeight2);
    }
  }, []);


  return (
    <GradientBackground startColor="#040D12" endColor="#040D12">
      <Card>
        <ProjectContainer>
          <FlexRow>
            <TextMod size="2.5rem" font="Roboto" weight="900"><GradientText startColor="#00AD7C" endColor="#03C988">{title}</GradientText></TextMod>
             
           
            <FloatingElement>
              <CircleExpand>🔵</CircleExpand>
            </FloatingElement>
          </FlexRow>

        

        
        

           
         
           

           
         

          <GlassCard hoverColor="white"  ref={elementRef} dynamicHeight={height}>
          <FlexContainer>
                <GrowVerticalLine marginRight="10px" dynamicHeight={height}></GrowVerticalLine>
              <Description>
            <TextMod size="3.2rem" color="#E1E5EA" font="Ubuntu" weight="500" >
                <LineHeightText lineHeight="1.6">
                  <FlexContainer>
      <h5>DESCRIPTION</h5>
      <GrowHorizontalLine/>
      <LinksContainer>
         

         <GlowingButton2 bgColor="#00DFA2" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
         <SocialMediaLogo src={git} alt="GitHub Logo"/></GlowingButton2>

         <GlowingButton2 bgColor="#00DFA2" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
         <SocialMediaLogo src={git} alt="GitHub Logo"/></GlowingButton2>


         <GlowingButton2 bgColor="#00DFA2" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
         <SocialMediaLogo src={git} alt="GitHub Logo"/></GlowingButton2>

          
         </LinksContainer>
    </FlexContainer>
    </LineHeightText>

    

              </TextMod>
              


              <TextMod size="24px" color="#9DB2BF" font="Roboto" weight="600" >
                <LineHeightText lineHeight="1.6"><p>{description}</p></LineHeightText>
              </TextMod>

              
            </Description>
            </FlexContainer>
          </GlassCard>
          <TransparentContainer>
          <TextMod size="2.5rem" color="#9DB2BF" font="Roboto slab" weight="500" >

  <Title>What I have learned</Title>
  </TextMod>

  <div>
  <TextMod size="30px" color="#9DB2BF" font="Roboto slab" weight="500" >

    <strong>Good practices:</strong>
    </TextMod>
    <StyledList>
      
      <li>
      <TextMod size="20px" color="#9DB2BF" font="Roboto slab" weight="500" >

        <GlowingBall color="#03C988"  />
        <Note bgColor="#03C988">
          Note Text
        </Note>
        </TextMod>
      </li>
      <li>
      <TextMod size="20px" color="#9DB2BF" font="Roboto slab" weight="500" >

        <GlowingBall color="#03C988"  />
        <Note bgColor="#03C988">
          Note Text
        </Note>
        </TextMod>
      </li>
      <li>
      <TextMod size="20px" color="#9DB2BF" font="Roboto slab" weight="500" >

        <GlowingBall color="#03C988"  />
        <Note bgColor="#03C988">
          Note Text
        </Note>
        </TextMod>
      </li>
      {/* ... other bullet points here */}
      </StyledList>
  </div>

  <div>
  <TextMod size="30px" color="#9DB2BF" font="Roboto slab" weight="500" >

    To avoid
    </TextMod>
    <StyledList>

      <li>
        <GlowingBall color="#FF165D" />
        <Note bgColor="#FF165D">
          Note Text 
        </Note>
      </li>
      {/* ... other bullet points here */}
    </StyledList>
  </div>
</TransparentContainer>
<TagsContainer>
<TextMod size="20px" font="Roboto slab" weight="normal">
  <SkillTag>React</SkillTag>
  <SkillTag>Redux</SkillTag>
  <SkillTag>Styled-Components</SkillTag>
  </TextMod>
  {/* ... add other tags here */}
</TagsContainer>
          <GlowingLine lineColor="#00DFA2" shadowColor="#00DFA2" />
          <VideoWrapper>
      <StyledReactPlayer 
        url='https://www.youtube.com/watch?v=DZjSVHBpcNI' 
        controls={true} 
        width="100%" 
        height="auto"
      />
    </VideoWrapper>
    <div>
     
            <embed src={pdfPath} type="application/pdf" width="100%" height="900px" />
           </div>


          {demonstration && (
            <DemonstrationContainer show="true"  ref={elementRef2} dynamicHeight={height2}>

                 <FlexWrapper>   
                  <GrowVerticalLine marginRight="10px"/>           

              <GlassCard color="tranparent" >

              <CenteredGrowHorizontalLine />
  <TextMod size="3.2rem" color="#E1E5EA" font="Playfair Display
, sans-serif" weight="500">
    <LineHeightText lineHeight="1.6">
      <CenteredH5>DEMONSTRATION</CenteredH5>
    </LineHeightText>
  </TextMod>
                <StepsContainer>
                  {demonstration.map((step, index) => (
                    <StepItem key={index}>
                      <CenteredGrowHorizontalLineSmall />
                      <StepDescription>
                        <TextMod font="Roboto" weight="600" size="20px" color="#9DB2BF" lineHeight="1.6" >                      
<p>{step.description}</p></TextMod>
                      </StepDescription>
                      <GifContainer>
                        <GifImage src={step.gifImage} alt={`Demo for step ${index + 1}`} />
                      </GifContainer>
                    </StepItem>
                  ))}
                </StepsContainer>
              </GlassCard>
              </FlexWrapper>
            </DemonstrationContainer>
          )}
        </ProjectContainer>
      </Card>
      <GradientIconFill>🌟</GradientIconFill>
      <ExpandingBorderInput placeholder="Type here..." />
    </GradientBackground>
  );
};

export default Project;
const StyledList = styled.ul`
  list-style-type: none; // Removes default bullet points
  padding: 0; // Removes default padding
  margin: 20px; // Removes default margin

  li {
    margin-bottom: 20px; // Adds margin to the bottom of each list item
  }
`;
export const SocialMediaLogo = styled.img`
  width: 40px; // Set a fixed width to visualize the logo
  height: auto;
  margin: 0 ;

 
`;