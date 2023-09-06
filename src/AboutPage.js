import React from 'react';
import { GradientBackground, FloatingElement, TextModP,TextMod, GrowHorizontalLine , CardContainer as Cc} from './StyledComp';
import { SlideInLeft, SlideInRight, TextFadeIn, DivAppear } from './Animations';
import styled,{keyframes} from 'styled-components';
import { GlowsText } from './About';
import ccna from "./img/ccna.png"
import cp from "./img/cp.jpg"
import scuba from "./img/scuba.jpg"
import hcia from "./img/hcia.png"
import scout from "./img/scout.jpg"
import ps from "./img/ps.jpg"
import { glowingAnimation2 } from './Skills';
import d365 from "./img/365.png"





const TextContainer1 = styled.div`
  display: flex;
  align-items: center;
  left: 0; // Start from the left edge
  height:auto;
  color:white;
  width:100%;
  justify-content: flex-start; // Horizontally aligns items to the start
  padding-right:50px;
  padding-left:100px;

  color: grey;
  box-sizing: border-box;
  @media (max-width: 700px) {
    padding-left: 5px;
    padding-right:5px;

  }


`;

export const TextContainer2 = styled.div`
  display: flex;
  left: 0; // Start from the left edge
  justify-content: flex-start; // Horizontally aligns items to the start

  align-items: center;
  color: white;
  width:100%;
  padding-right:100px;
  padding-left:50px;
  color:grey;
  box-sizing: border-box;
  @media (max-width: 700px) {
    padding-left: 5px;
    padding-right:5px;

  }




`;
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

const Image1 = styled.img`
  height: 100%;
  max-width:600px;
  max-height:800px;
  width:auto;

  box-sizing: border-box;
  @media (max-width: 700px) {
    max-width: 250px;
    max-height: 250px;
  }

`;

const Image2 = styled.img`
  height: 100%;
  max-width:600px;
  width:auto;

  max-height:700px;

  @media (max-width: 700px) {
    max-width: 250px;
    max-height: 250px;
  }
  width: 100%;
  box-sizing: border-box;

  

`;
const Container = styled.div`
  display: flex;
  min-height:700px;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  box-sizing: border-box;
  overflow: hidden; 

  @media (max-width: 700px) {
    margin-left: 0px!important;
    margin-right: 0px!important;
    min-height:300px;
  }

  position: relative;
`;

const Container1 = styled.div`
  position: absolute; // It will be positioned relative to its parent Container
  left: 0; // Start from the left edge
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width:auto;
  



`;

const Container2 = styled.div`
  position: absolute; // It will be positioned relative to its parent Container
  right: 0; // Start from the right edge
  display: flex;

  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width:auto;
  





`;
const AboutContainer = styled.div`
  padding-top:20px;
  text-align: start;
  width:80%;
  padding-left:200px;
  box-sizing: border-box;
  margin-bottom:300px;
  @media (max-width: 700px) {
    padding-left: 20px;
  }

  `;
  export const TextContainer3 = styled.div`
  display: flex;
  flex-direction: column; // Stacks children vertically
  align-items: start; // Center-aligns text horizontally
  justify-content: center; // Center-aligns children vertically
  color: white;
  padding-left:180px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 700px) {
    padding-left: 20px;
  }

`;
const spacerv = styled.div`


`;

  export const Header = styled.div`
  background: ${(props) => props.color || '#2C3333'};
  padding-top:50px;
  height:200px;
  margin-top:-30px;
  margin-right:0px;
  box-sizing: border-box;
  @media (max-width: 700px) {
    height: 250px;

  }
  &::before, &::after {
    content: "";
    position: absolute;
    z-index: 1;
    height:3px;
    transition: all 0.5s ease;
    background: #00FFAB;
    animation: ${borderGlowAnimation} 1.5s infinite alternate;
  }
  

  &::after {
    left: 0px;
    right: 10px;
    top: 0; // This sets the horizontal line at the top
  }

  &::before {
    left: 0px;
    right: 0;
    bottom: 0; // This sets the horizontal line at the bottom
  }



  display: flex;
  align-items: center;
  width:100%;
  @media (max-width: 700px) {
    margin-left:0px!important ;
    margin-right:0px!important ;  }

  
  position: relative; // Required to use absolute positioning within

  `;
  const hobbies = [
    {
        id:1, 
        name: 'Competitive Programming', 
        image: cp, 
        description: 'The world of algorithms and problem-solving fascinates me. My passion for competitive programming is not just theoretical; I have actively participated in esteemed competitions such as IEEEXtreme and Google HashCode. These experiences have not only honed my coding prowess but also instilled a relentless drive to always push my limits. While I take pride in my achievements, I consider each competition an opportunity to learn and grow.'
    },
    {
        id:2,
        name: 'Scout', 
        image: scout, 
        description: 'My journey as a scout has been transformative. Taking on the role of a Captain, I have had the privilege to guide and be a role model for young minds. More than the adventures and camping, it’s the values of leadership, teamwork, and responsibility that I cherish the most. Being a scout isn t just about wearing a uniform; it is  about leading by example and making an impact in the lives of others.'
    },
    {
        id:3, 
        name: 'Scuba Diving', 
        image: scuba, 
        description: 'The underwater world is both mysterious and mesmerizing, and scuba diving allows me to explore its vastness. While the thrill of diving is undeniable, I take pride in being a Scuba Diving instructor, guiding others to experience the wonders of the deep safely. Every dive is a new adventure, a chance to witness nature is  art, and a reminder of the importance of marine conservation.'
    },
    {
        id:4, 
        name: 'Public Speaking', 
        image: ps, 
        description: 'Public speaking is more than just conveying information; it is about connecting, inspiring, and sharing stories. I have always believed in the power of words, and through public speaking, I practice and refine my communication skills. Every audience presents a unique opportunity to resonate, engage, and leave a lasting impact. While I am confident in my ability to communicate, I always approach each session as a learner, eager to adapt and improve.'
    },
    //... add more hobbies
]; 

  
  const certifications = [
    { name: 'Certification1', image: d365, link: '<LINK1>' },
    { name: 'Certification2', image: ccna, link: '<LINK2>' },
      { name: 'Certification1', image: hcia, link: '<LINK1>' },
    { name: 'Certification2', image: ccna, link: '<LINK2>' },
    //... add more certifications
  ];

const AboutPage = () => {
    return (
        <GradientBackground  direction="to bottom" startColor="#F3FDE8" endColor="#E1ECC8">
          <Header>
            <TextContainer3>     
                         <TextMod font="Roboto Slab" weight="500" size="38px" color="#E8FFCE" lineHeight="1.8" spacing="3.8"> Saad Katar </TextMod>
                         <TextMod font="Roboto Slab" weight="500" size="28px" color="#E8FFCE" lineHeight="1.8" spacing="2.6"> Software Engineer</TextMod>


   </TextContainer3>
       <TextContainer3>
       <TextContainer2><GlowsText>LinkedIn:  </GlowsText>  <TextMod font="Roboto Slab" weight="500" size="15px" color="#D4ECDD" lineHeight="1.8"spacing="2">.https://www.linkedin.com/in/saad-katar-b72864218/ </TextMod>
</TextContainer2>

<TextContainer2><GlowsText>Gmail:</GlowsText> <TextMod font="Roboto Slab" weight="500" size="15px" color="#D4ECDD" lineHeight="1.8" spacing="2">   Katarsaad@gmail.com </TextMod>
</TextContainer2>

<TextContainer2><GlowsText>GitHub:</GlowsText> <TextMod font="Roboto Slab" weight="500" size="15px" color="#D4ECDD" lineHeight="1.8" spacing="2">   https://github.com/KatarSaad </TextMod>
</TextContainer2>

       </TextContainer3>
       </Header>
        <AboutContainer>
       
            
        <TextMod font="Roboto Slab" weight="600" size="24px" color="#003638" lineHeight="1.8" spacing="1.2">
    Dedicated to 
    <GlowsText color="#5F7A61">designing</GlowsText>, 
    <GlowsText color="#5F7A61">developing</GlowsText>, modern software solutions with a focus on continuous improvement and learning. I'm skilled in frontend tools like 
    <GlowsText as="span" color="#5F7A61" size="27px">React</GlowsText> and 
    <GlowsText as="span" color="#5F7A61" size="27px">JavaScript</GlowsText>, as well as backend technologies such as&nbsp;
    <GlowsText as="span" color="#5F7A61" size="27px">ASP.NET</GlowsText>&nbsp;and&nbsp;
    <GlowsText as="span" color="#5F7A61" size="27px">C#</GlowsText>.&nbsp;I 
    <GlowsText>design</GlowsText> robust 
    <GlowsText>software architectures</GlowsText> and turn 
    <GlowsText>system requirements</GlowsText> into real solutions. Using principles like&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#152D35">OOP</TextMod>&nbsp;and&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#152D35" >design patterns</TextMod>, my code is&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#152D35">clear</TextMod>&nbsp;and&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#152D35">efficient</TextMod>. I embrace challenges, always aiming for growth and improvement in&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#152D35">agile</TextMod>&nbsp;settings.
  </TextMod>        </AboutContainer>
  <div style={{marginBottom:"100px"}}>

  <TextContainer3>     
                         <TextMod font="Roboto Slab" weight="500" size="48px" color="black" lineHeight="1.8" spacing="3.8"> Activities and Hobbies </TextMod>
          </TextContainer3>

  </div>
 
  
  
        {hobbies.map((hobby, index) => (
          <Container key={hobby.name}>
            {hobby.id % 2 === 0 ? (
              <Container1>
                <Image1 src={hobby.image} alt={hobby.name} />
                <TextContainer1> 
                  
                         <TextModP font="Roboto Slab" weight="500" size="20px" color="#444941" lineHeight="1.8" spacing="1.2">
                         <TextModP font="Roboto Slab" weight="900" size="28px" color="#444941" lineHeight="1.8" spacing="1.2">
{hobby.name} </TextModP>
{hobby.description} </TextModP></TextContainer1>
              </Container1>
            ) : (
              <Container2>
                <TextContainer2>         
                         <TextModP font="Roboto Slab" weight="500" size="20px" color="#444941" lineHeight="1.8" spacing="1.2">
                         <TextModP font="Roboto Slab" weight="900" size="28px" color="#444941" lineHeight="1.8" spacing="1.2">
{hobby.name} </TextModP>
{hobby.description} </TextModP></TextContainer2>
                <Image2 src={hobby.image} alt={hobby.name} />
              </Container2>
            )}
          </Container>
        ))}

<div style={{marginTop:"100px", marginBottom:"100px"}}>

<TextContainer3>     
                       <TextMod font="Roboto Slab" weight="500" size="48px" color="black" lineHeight="1.8" spacing="3.8"> Certifications </TextMod>
        </TextContainer3>

</div>
  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsContainer>
    {certifications.map(cert => (
        <CardContainer key={cert.name}>
            <CardHeader image={cert.image}/>
        </CardContainer>
    ))}
</CardsContainer>
        </div>
      </GradientBackground>
    );
  };
  
  export default AboutPage;
 

const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap; // To ensure items don't wrap to the next line
  
  // Hide the scrollbar
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  // IE and Edge
  scrollbar-width: none;  // Firefox
`;

const CardHeader = styled.div`
position: relative;  // added this line
height: 550px;
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
export const CardContainer = styled.article`
  min-width: 700px; // Full width for mobile
  display: block;
  margin: 30px;

  background: #B8F1B0;
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);

  transition: .25s;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 701px) {
    min-width: 200px; // Full width for mobile
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
