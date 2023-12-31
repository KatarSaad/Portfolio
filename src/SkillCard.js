import React from 'react';
import styled from 'styled-components';
import TextMod from "./About"
import { GlowsTextNoAnimation } from "./About"
import { SlideCover, SlideCoverRight } from './Animations';


const CardWraper = styled.div`
  ...
  border-right: 1px solid white;
  
  &:first-child {
    border-right: none;  // Ensures the last card doesn't have a right border
  }
`;
const Card = styled.div`
width: 100%;
height: 400px;
min-width:100px;
background-color: transparent;
border: 2px solid #00DFA2;
margin: 0; 
padding-top: 2px;
padding-left:10px;
padding-right:10px;

display: flex;
flex-direction: column;
&:nth-child(2n-1) {  // Targeting all odd children (1st, 3rd, 5th, ...)
  border-right: none;
}

@media (max-width: 600px) {
  padding-left: 5px; // Reduce padding on small screens
  padding-right:5px
}
`;

const ScrollableContent = styled.div`
  overflow: auto;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically on small screens
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media (min-width: 601px) {
    flex-direction: row; // Horizontal layout on larger screens
    justify-content: flex-start;
    margin-bottom: 5px; // Reduce spacing between rows for mobile

  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-top:0;
  margin-right: 15px;
  @media (max-width: 600px) {
    width: 50px;  // Slightly reduce logo size for mobile
    height: 50px;
  }
`;

const Header = styled.div`
  text-align: center;
  font-family: 'Cutive Mono', monospace;

  color: #E3FCBF;
  margin-bottom: 5px;
  border-bottom: 3px solid #5C8374;
  padding:  0;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-family: 'Cutive Mono', monospace;

  color: #E3FCBF;
  font-size: 1.2rem; // Adjust for better mobile readability

  @media (max-width: 700px) {
    font-size: 1rem;
    margin: 5px 0; // Reduce spacing for mobile

  }
`;

const SkillTag = styled.span`
  background-color: #00DFA2;
  font-family: 'Cutive Mono';

  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 15px;
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 0.6rem; // Smaller font for mobile
    margin-right: 10px; // Slight reduction for mobile

  }
`;

const Description = styled.p`
  color: #FBFFDC;
  
  font-family: "Roboto Slab";
  font-weight: 600; // Corrected 'weight' to 'font-weight'
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 0.8rem; // Slight size adjustment for better readability
  }
`;

const SkillCard = ({ category }) => {
  return (
    <Card>
      <Header>
        <Logo src={category.image} alt="Category Logo" />
        <Title>{category.title}</Title>
      </Header>
      <ScrollableContent>
        {category.skills.map(skill => (
          <SlideCoverRight>
          <Row key={skill.name}>

            <SkillTag>{skill.name}</SkillTag>
            <Description>{skill.description}</Description>
          </Row>
          </SlideCoverRight>
        ))}
      </ScrollableContent>
    </Card>
  );
}

export default SkillCard;
