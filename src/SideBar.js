import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const SidebarContainer = styled.div`
  background-color: #182c25;
  color: #DEE1E6;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Name = styled.h1`
  color: #EEEEEE;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h2`
  color: #DCDCDC;
  margin-bottom: 2rem;
`;

const activeClassName = 'nav-item-active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: #DEE1E6;
  text-decoration: none;
  margin: 0.5rem 0;

  &.${activeClassName} {
    color: #F1F3F4;
  }

  &:hover {
    animation: ${keyframes`
      0% { border-bottom: 2px solid #DEE1E6; }
      100% { border-bottom: 2px solid #F1F3F4; }
    `} 0.3s forwards;
  }

  &:not(:hover) {
    animation: ${keyframes`
      0% { border-bottom: 2px solid #F1F3F4; }
      100% { border-bottom: 2px solid #DEE1E6; }
    `} 0.3s forwards;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 2rem;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Name>Your Name</Name>
      <JobTitle>Your Job Title</JobTitle>
      <StyledNavLink to="/experience">Experience</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/skills">Skills</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
      <SocialMediaContainer>
        <SocialIcon url="http://linkedin.com/in/yourlinkedinprofile" bgColor="#DEE1E6" />
        <SocialIcon url="http://github.com/yourgithubprofile" bgColor="#DEE1E6" />
        <SocialIcon url="http://twitter.com/yourtwitterhandle" bgColor="#DEE1E6" />
      </SocialMediaContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
