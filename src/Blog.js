import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BlogContainer = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s ${slideInRight} ease-out;
  
  h1 {
    color: #3498db;
    margin-bottom: 1rem;
  }
`;

const BlogPost = styled.div`
  width: 100%;
  border: 1px solid #3498db;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;

  h2 {
    color: #2c3e50;
  }

  p {
    color: #2c3e50;
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <h1>Latest Blog Posts</h1>
      <BlogPost>
        <h2>Blog Post Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum id sem vitae fermentum.</p>
      </BlogPost>
      <BlogPost>
        <h2>Blog Post Title 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum id sem vitae fermentum.</p>
      </BlogPost>
      <BlogPost>
        <h2>Blog Post Title 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum id sem vitae fermentum.</p>
      </BlogPost>
    </BlogContainer>
  );
};

export default Blog;
