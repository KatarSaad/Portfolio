import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContactContainer = styled.div`
  margin: 2rem auto;
  width: 60%;
  padding:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s ${slideUp} ease-out;
  border: 1px solid white; // Added a white border for the container
  
  h1 {
    color: white;
    margin-bottom: 1rem;
    font-family: 'Roboto Slab'; // Use Roboto font for the header
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Roboto Slab'; // Use Roboto font for form elements
    weight:900;
    input, textarea {

      margin: 1rem;
      padding: 1rem; // Increased padding to make the input and textarea bigger
      border: 1px solid #bdc3c7; // Added border to input and textarea
      border-radius: 5px;
      background: transparent;
      font-size: 20px; // Set font size to 20px
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // Added box-shadow to input and textarea
      font-family: 'Roboto', sans-serif; // Use Roboto font
    }

    button {
      padding: 0.2rem 0.5rem; // Adjusted padding to match the text size
      border: none;
      border-radius: 0; // Removed border-radius
      background-color: white;
      color: #9AD2B2;
      font-size: 20px; // Set font size to 20px for button text
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-family: 'Roboto Slab'; // Use Roboto font

      &:hover {
        background-color: #2c3e50;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
