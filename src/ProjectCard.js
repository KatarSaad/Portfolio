import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from "styled-components"

const Style = styled.div`
  max-width: 1000px;
  width: 900px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #BDC7C9;

  &:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.1); 
  }

  .cardTitle {
    text-align: center;
    padding: 10px;
    border-radius: 5px;
  }

  .projectImage {
    width: 100%;
    height: auto;
    display: block;
    margin:  0;
  }
`;

const ProjectCard = ({ title, description }) => (
  <Style>
    <Card style={{ width: '100%', background: 'transparent', boxShadow: 'none',margin: 0, padding: 0}}>
      <CardContent  style={{ padding: 0 ,margin:0}}>
        <Typography variant="h5" component="div" color="green" className="cardTitle" >
          {title}
        </Typography>
        <img src="https://via.placeholder.com/800x400" alt="Project Thumbnail" className="projectImage"/>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Style>
);

export default ProjectCard;
