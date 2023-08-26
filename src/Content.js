import React, { useState } from 'react';
import OldPortfolio from './OldPortfolio'
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  App from './App';

const MainContainer = styled.div`
  display: flex;
  padding:0;
  margin-top:-40px;
  

  height: 102vh; // take full viewport height
  overflow: hidden; // hide any overflow caused by children
  background:  #14C38E;
   ::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for Firefox
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;  // IE and Edge
  }
  

`;

const Content = styled.div`
  flex-grow: 1;
 // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  // Hide scrollbar for Firefox
  scrollbar-width: none;

  overflow-y: auto;
  height: 100%; // take full height of parent
`;
const SidebarWrapper = styled.div`
  overflow: hidden;
  margin:0;
  padding:0;
  background: green;
  
`;

const ContentComponent = () => {
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
 }


  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setScrollPercentage(scrollTop / (scrollHeight - clientHeight));
  };

  // Interpolate background color
  const red = Math.round(24 + 231 * scrollPercentage);
  const green = Math.round(44 + 193 * scrollPercentage);
  const blue = Math.round(37 + 100 * scrollPercentage);
  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <MainContainer>
    <App backgroundColor={backgroundColor} scrollPercentage={scrollPercentage} scrollToRef={scrollToRef} ref1={section1Ref} ref2={section2Ref} ref3={section3Ref} ref4={section4Ref} />
    <SidebarWrapper scrollPercentage={scrollPercentage}>
    </SidebarWrapper>
    <Content onScroll={handleScroll}>
      <OldPortfolio ref1={section1Ref} ref2={section2Ref} ref3={section3Ref} ref4={section4Ref}/>
    </Content>
  </MainContainer>
  );
};

export default ContentComponent;
