import styled from 'styled-components';
import React from 'react';

const fonts = [
    "Playfair Display", "Bitter", "Libre Baskerville", "Archivo Narrow",
    "Alegreya Sans", "Ubuntu", "Crimson Text", "Heebo", "Cabin", "Lobster",
    "Pacifico", "Abril Fatface", "Barlow", "Bree Serif", "Bonbon", "Ropa Sans",
    "Amiri", "Orbitron", "Zilla Slab", "Great Vibes", "Roboto Slab", "Slabo",
    "EB Garamond", "Neuton", "Josefin Slab", "Unna", "Abhaya Libre", "Roboto",
    "Rubik", "Notable", "Asap", "Cutive Mono", "Arvo", "Anton", "Fjalla One",
    "Mukta", "Varela Round", "Darker Grotesque"
  ];

const TestFontContainer = styled.div`
  background-color: #333;
  padding: 20px;
`;

const TestFonts = () => {
  return (
    <TestFontContainer>
      {fonts.map(font => (
        <div key={font}>
          <TextMod font={font} size="21px" weight="800">
            {font}
          </TextMod>
          <TextMod font={font} size="21px" weight="600">
            Courage is not the absence of fear, but rather the judgment that something else is more important than fear.
          </TextMod>
          <hr />
        </div>
      ))}
    </TestFontContainer>
  );
};

export default TestFonts;


export const TextMod = styled.p`
  font-family: ${props => props.font || 'Roboto'};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => props.size || '16px'};
  font-style: ${props => props.style || 'normal'};
  color: ${props => props.color || '#FFFFFF'};
  text-transform: ${props => props.transform || 'none'};
  line-height: ${props => props.lineHeight || '1.5'};
  letter-spacing: ${props => props.letterSpacing || 'normal'};
  text-align: ${props => props.textAlign || 'left'};
  // You can continue to add other text properties as required
`;
