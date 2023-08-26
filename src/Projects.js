import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowMoreButton = styled.button`
  background-color: #CFF5E7;
  color: #0D4C92;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin: 20px auto;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #59C1BD;
  width: 80%;
  margin: 20px 10%;
`;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    { title: "Project 1", description: "This is a description of Project 1." },
    { title: "Project 2", description: "This is a description of Project 2." },
    { title: "Project 3", description: "This is a description of Project 3." },
    // Add more project data here
  ];

  return (
    <ProjectsContainer>
      {projectsData.slice(0, showAll ? projectsData.length : 2).map((project, index) => (
        <>
          <ProjectCard key={index} title={project.title} description={project.description} />
          {index !== (showAll ? projectsData.length : 2) - 1 && <Divider />} 
        </>
      ))}

      {!showAll && projectsData.length > 2 && (
        <ShowMoreButton onClick={() => setShowAll(true)}>Show More</ShowMoreButton>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
