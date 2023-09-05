import styled, { css, keyframes } from 'styled-components';
import { glowingAnimation2 as animation} from './About';
export const FlexContainer = styled.div`
  display: flex;
   margin:0;!important
    padding:0;!important
  align-items: center; // This will vertically center the line next to the text
`;
// Spacer for creating gaps
export const Spacer = styled.div`
  height: ${props => props.size || '20px'};
`;

// For text highlights
export const Highlight = styled.span`
  color: #FFA500;
  font-weight: bold;
`;

// For separators or dividers
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #ccc;
  margin: 20px 0;
`;
export const LinkButton = styled.a`
  font-size: 1rem;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  background: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

// Secondary button style
export const SecondaryButton = styled(LinkButton)`
  background: #FFA500;
  &:hover {
    background: #FF8C00;
  }
`;

// Subtitle styling
export const Subtitle = styled.h3`
  font-size: 2.5rem;
  color: #97FEED;
  margin-bottom: 10px;
`;

// Flex Row container for horizontal layouts
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Lighter styled paragraph
export const LightParagraph = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

// Emphasized Container for important info
export const HighlightContainer = styled.div`
  border: 1px solid #FFA500;
  padding: 20px;
  border-radius: 10px;
  background: #FFFAF0;
`;

// Emphasized Text with shadow
export const ShadowText = styled.span`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

// Container with a background blur effect
export const BlurBackground = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 10px;
`;

// Box with drop shadow
export const DropShadowBox = styled.div`
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

// Circular Avatar for profile images
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

// Animated Button for attention
export const AnimatedButton = styled(LinkButton)`
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

// Flex column layout
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Card for content blocks
export const Card = styled.div`
    background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

// Pill badges for tags, status, etc.
export const PillBadge = styled.span`
  background-color: #FFA500;
  color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 0.8rem;
`;

// Interactive List Item
export const InteractiveListItem = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  transition: background 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Bold and larger text for emphasis
export const EmphasisText = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

// Muted Text for less important content
export const MutedText = styled.span`
  color: #aaa;
`;

// ... You can keep expanding this based on your project's needs.
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
    padding: 20px;
`;

export const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  
  color: #333;
  margin-bottom: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width:300px;
`;



export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;
export const CenteredGrowHorizontalLine = styled.div`
  width: 30px;
  height: 2px;
  margin-top: 10px;
  background-color: ${props => props.lineColor || '#00DFA2'};
  transition: width 0.6s;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  
`;
export const CenteredGrowHorizontalLineSmall = styled.div`
  width: 30px;
  height: 2px;
  margin-bottom:20px;
  margin-top: 0px;
  margin-left: -30px; // This moves the line 50px to the left.

  background-color: ${props => props.lineColor || '#00DFA2'};
  transition: width 0.8s;
  align-self: center; // This centers the line within its flex container.
  // Remove the absolute positioning and related properties.
`;
export const GrowVerticalLine = styled.div`
  // Your original styles
  margin-top: 50px;
  width: 1px;
  margin-right: 20px;
  height: 50px;
  padding: 3px;
  transition: height 0.8s, box-shadow 0.3s;  // added box-shadow to the transition
  transform: scaleX(0.3);
   margin-right: ${props => props.marginRight || '0px'}; // New padding-right prop
  margin-left: ${props => props.marginLeft || '0px'};   // New padding-left prop

  // Glowing effect
  background-color: ${props => props.lineColor || '#00DFA2'};
  box-shadow: 0 0 8px ${props => props.shadowColor || '#00DFA2'};

 
`;

export const DemonstrationContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
   display: flex;
  align-items: start;
  background: rgba(255, 255, 255, 0.01);
  padding: 0px;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover ${CenteredGrowHorizontalLine }{
    width:90%;
  }
   &:hover ${GrowVerticalLine} {
    height: ${props => props.dynamicHeight || '500px'};!important
  }
  &:hover {
    background: rgba(255, 255, 255, 0.02) !important; 
    border-radius: 5px !important;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15) !important;
    
  
`;

export const StepsContainer = styled.ul`
  list-style-type: none;
  padding-left: 30px;
  
`;

export const StepItem = styled.li`
position: relative;  // Add this line
  
display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${CenteredGrowHorizontalLineSmall} {
    width: 90%; 
}


`;

export const StepDescription = styled.p`
  font-size: 3.1rem;
  color: #444;
  padding-bottom: 40px;
`;

export const GifContainer = styled.div`
  width: 100%;
  max-width: 80%; 
  height:800px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:30px;

`;
export const CenteredH5 = styled.h5`
  position: relative;
  z-index: 1;  // to ensure it's above the line
  text-align: center;
  margin: 0;
  padding-top: 10px;  // adjust as needed for vertical alignment
  font-weight: 500;
  font-size: 3.2rem;
  color: #E1E5EA;
  font-family: 'Roboto', sans-serif;
`;


export const GifImage = styled.img`
  width: 100%;
  height: auto;
`;
// ... You can keep expanding this based on your project's needs.




import { defaultFallbackInView } from 'react-intersection-observer';

// 1. 3D Flip Card: Can be used for hover effects on profile cards, or showcasing portfolio projects.
export const FlipCard = styled.div`
  perspective: 1500px;

  &:hover {
    & > div:first-child {
      transform: rotateY(180deg);
    }
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s;
`;

export const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  ${props => props.back && css`
    transform: rotateY(180deg);
  `}
`;

// 2. Neumorphism (Soft UI): Trending UI design pattern
export const NeumorphicBox = styled.div`
  background: #e0e0e0;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff;
  padding: 20px;
`;

// 3. Glowing Border Box
export const GlowBox = styled.div`
  border: 2px solid #fff;
  box-shadow: 0 0 5px #FFA500, 0 0 5px #FFA500, 0 0 5px #FFA500;
  border-radius: 10px;
  margin-left:3px;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});

`;

// 4. Gradient Background Button


// 5. Parallax Scrolling Effect Container
export const ParallaxContainer = styled.div`
  background-image: url('${props => props.bgImage}');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 300px;
`;

// 6. Typewriter Style Text (mimics the look of text from a typewriter)
export const TypewriterText = styled.p`
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  font-size: 1.5rem;
`;

// 7. Pulsing Element (for attention or loading scenarios)
export const PulseCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFA500;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 165, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0);
    }
  }
`;

// 8. Animated Underline Link
export const AnimatedUnderlineLink = styled.a`
  color: #FFA500;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #FFA500;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// 9. Floating Element
export const FloatingElement = styled.div`
  animation: float 3s infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

// 10. ToolTip
export const ToolTip = styled.span`
  position: relative;
  &:hover::before {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.9rem;
  }
`;

// ... You can keep expanding this based on your project's needs.



// ... Previous Components ...

// 21. Parallax Container: A parallax effect container for background images


// 22. Neumorphic Button: A button with a soft UI effect


/////// ************************************************************************************************

// 11. Skewed Button: Provides a slanted button effect
export const SkewedButton = styled.button`
  transform: skew(-10deg);
  background: #FFA500;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #FF8C00;
  }
`;


export const GrowHorizontalLine = styled.div`
   width: 50%;  // adjust width as needed for your requirements
  height: 3px;
  transition: width 0.3s;

  // Styles from GlowingLine
  margin: 20px;
  background-color: ${props => props.lineColor || '#00DFA2'};
  transition: box-shadow 0.3s, width 0.8s;  // merging transitions
  box-shadow: 0 0 8px ${props => props.shadowColor || '#00DFA2'};

  &:hover {
    width: 100%;  // or whatever your hover effect should be
  }

 
`;

// Vertical line that grows in height upon hover.


// 12. Glassmorphism Card: Trending glass effect design pattern
export const GlassCard = styled.div`
min-height: 100%;
height: auto;
padding:0;
  background:  ${props => props.color ||"rgba(255, 255, 255, 0.01)"};
  padding: 1px;
  border-radius: 5px;
  height:100%;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom:20px;
  padding-bottom:0;
  
  h5 {
    margin:0px;!important
    padding:0px;!important


  }
  p {
    margin:0px;!important
    padding:0px;!important


   


  }
  
  &:hover ${GrowVerticalLine} {
    height: ${props => props.dynamicHeight || '50px'};
  }
&:hover ${GrowHorizontalLine} {
    width: 100%; 
}


  &:hover {
    background: rgba(255, 255, 255, 0.02) !important; 
    border-radius: 5px !important;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15) !important;
    
    

    p {
      color: #E8EAE6 !important;  // Change paragraph color to E8EAE6 on hover
    }

    h5 {
      color: #35A29F !important;  // Change h3 color to BEF992 on hover
    }
  }
`;



// 13. Text with Gradient Effect


// 14. Blob Effect: Creates organic shaped blob as a background
export const BlobBackground = styled.div`
  width: 200px;
  height: 200px;
  background: #FFA500;
  border-radius: 50%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    background: #FFA500;
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
`;

// 15. Ribbon Banner: Creates a ribbon-like banner effect on a card or box
export const RibbonBanner = styled.div`
  position: relative;
  padding: 20px;
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
  }
  &:before {
    left: 0;
    border-width: 10px 10px 0;
    border-color: #FFA500 transparent transparent;
  }
  &:after {
    right: 0;
    border-width: 0 10px 10px;
    border-color: transparent transparent #FFA500;
  }
`;

// 16. Dashed Outline Container: Useful for highlighting important sections
export const DashedContainer = styled.div`
  border: 2px dashed #FFA500;
  padding: 10px;
`;

// 17. Animated Checkbox: Checkbox with an animation upon check
export const AnimatedCheckbox = styled.input.attrs({ type: 'checkbox' })`
  &:checked::before {
    content: '\\2713'; // Unicode checkmark
    position: absolute;
    font-size: 1.5rem;
    animation: checkmark 0.4s ease-in-out;
  }

  @keyframes checkmark {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

// 18. Expanding Border Input: Input field with an expanding border effect on focus
export const ExpandingBorderInput = styled.input`
  border: 1px solid #aaa;
  transition: border 0.3s;

  &:focus {
    border-width: 3px;
  }
`;

// 19. Rotating Loader: Rotating circle, useful for loading indicators
export const RotatingLoader = styled.div`
  border: 4px solid rgba(255, 165, 0, 0.3);
  border-top: 4px solid #FFA500;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// 20. Zigzag Separator: Zigzag shaped divider to separate sections
export const ZigzagSeparator = styled.div`
  background: repeating-linear-gradient(-45deg, #FFA500, #FFA500 10px, transparent 10px, transparent 20px);
  height: 10px;
`;

// ... You can continue adding more components or customize these as per your requirements.

//******************************** */


export const NeumorphicButton = styled.button`
  background: #e0e0e0;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px #ffffff, 5px 5px 10px #aeaeae;
  transition: all 0.3s ease;

  &:active {
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 7px #aeaeae;
  }
`;

// 23. Floating Label Input: Input with a floating label animation
export const FloatingLabelInput = styled.div`
  position: relative;

  input {
    border: none;
    border-bottom: 2px solid #aaa;
    padding: 10px 0;
    width: 100%;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-bottom-color: #FFA500;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -20px;
      font-size: 0.8rem;
      color: #FFA500;
    }
  }

  label {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
    color: #777;
    transition: all 0.3s;
  }
`;

// 24. Blurred Background Section: A section with a frosted glass effect
export const BlurredBackground = styled.section`
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

// 25. Responsive Grid: A grid that adjusts its columns based on the screen size
export const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

// 26. Bouncing Loader: A simple bouncing dot animation for loading indicators
export const BouncingLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 10px;
    height: 10px;
    background: #FFA500;
    border-radius: 50%;
    margin: 0 5px;
    animation: bounce 0.8s infinite alternate;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-15px);
    }
  }
`;

// 27. Radial Progress Bar: A circular progress indicator
export const RadialProgressBar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
  }

  div {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
    top: 0;

    &:first-child {
      left: 0;
      transform: rotate(${props => props.percentage <= 50 ? 0 : (props.percentage - 50) * 1.8}deg);
      background: #FFA500;
    }

    &:nth-child(2) {
      left: 50%;
      background: ${props => props.percentage <= 50 ? "transparent" : "#FFA500"};
    }
  }
`;

// 28. Gradient Background Container
export const GradientContainer = styled.div`
background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  padding: 20px;
  color: white;
  width:300px;
  height:50px;

`;

// 29. Tooltip: Useful for providing additional information on hover
export const Tooltip = styled.span`
  position: relative;

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    white-space: nowrap;
  }
`;

// 30. Star Rating: Display star ratings
export const StarRating = styled.div`
  display: flex;
  align-items: center;
  
  span {
    font-size: 1.5rem;
    color: ${props => props.active ? "#FFA500" : "#e0e0e0"};
    margin-right: 5px;
  }
`;

export const TextMod = styled.span`
  font-size:  calc(${props => props.size || '1rem'} * 0.8);
  color: ${props => props.color || 'black'};
  font-style: ${props => props.type || 'normal'};
  font-weight: ${props => props.weight || 'normal'};
  font-family: ${props => props.font || 'Arial, sans-serif'};
  text-decoration: ${props => props.decoration || 'none'};
  text-transform: ${props => props.transform || 'none'};
  letter-spacing: ${props => props.spacing || 'normal'};
  line-height: ${props => props.lineHeight || 'normal'};
  
  @media (max-width: 700px) {
    font-size: calc(${props => props.size || '1rem'} * 0.6); // Reduce font size to 70% of the input size on screens <= 600px
  }
`;
export const TextModP = styled.p`
  font-size: calc(${props => props.size || '1rem'} * 0.8);
  color: ${props => props.color || 'black'};
  font-style: ${props => props.type || 'normal'};
  font-weight: ${props => props.weight || 'normal'};
  font-family: ${props => props.font || 'Arial, sans-serif'};
  text-decoration: ${props => props.decoration || 'none'};
  text-transform: ${props => props.transform || 'none'};
  letter-spacing: ${props => props.spacing || 'normal'};
  line-height: ${props => props.lineHeight || 'normal'};
  
  @media (max-width: 700px) {
    font-size: calc(${props => props.size || '1rem'} * 0.6); // Reduce font size to 70% of the input size on screens <= 600px
  }
  
`;
                      

// Horizontal line that grows in width upon hover.



// Line made of dots that expand in spacing upon hover.
export const DottedLineExpand = styled.div`
  height: 2px;
  border-bottom: 2px dotted ${props => props.lineColor || '#333'};
  transition: border-spacing 0.3s;

  &:hover {
    border-spacing: 5px;
  }
`;

// Line that subtly increases and decreases in thickness.
const breatheAnimation = keyframes`
  0%, 100% {
    height: 2px;
  }
  50% {
    height: 4px;
  }
`;

export const LineBreathe = styled.div`
  background-color: ${props => props.lineColor || '#333'};
  animation: ${breatheAnimation} 1.5s infinite;
`;

// Line that emits a subtle glow upon hover.
export const GlowingLine = styled.div`
  height: 3px;
  margin:20px;
  background-color: ${props => props.lineColor || '#00DFA2'};
  transition: box-shadow 0.3s;
  box-shadow: 0 0 8px ${props => props.shadowColor || '#00DFA2'};

`;

// Line that pulses in size upon hover.
const pulseAnimation = keyframes`
  0%, 100% {
    height: 2px;
  }
  50% {
    height: 4px;
  }
`;

export const LinePulse = styled.div`
  background-color: ${props => props.lineColor || '#333'};

  &:hover {
    animation: ${pulseAnimation} 1s infinite;
  }
`;

// Line made of dashes that animate as if moving.
const dashAnimation = keyframes`
  to {
    background-position: 100% 0;
  }
`;

export const DashAnimatedLine = styled.div`
  height: 2px;
  background-image: linear-gradient(90deg, ${props => props.lineColor || '#333'} 50%, transparent 50%);
  background-size: 10px 100%;
  animation: ${dashAnimation} 1s infinite linear;
`;

// Line that shrinks on hover.
export const LineShrink = styled.div`
  height: 2px;
  background-color: ${props => props.lineColor || '#333'};
  width: 100%;
  transition: width 0.3s;

  &:hover {
    width: 50%;
  }
`;

// Line that transitions its color upon hover.
export const ColorTransitionLine = styled.div`
  height: 2px;
  background-color: ${props => props.initialColor || '#333'};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.hoverColor || '#FFA500'};
  }
`;

// Line that animates like a wave.
const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
`;

export const WavyLine = styled.div`
  height: 2px;
  background-color: ${props => props.lineColor || '#333'};
  animation: ${waveAnimation} 1s infinite;
`;




// -------------------
// Shapes Animations:
// -------------------

// Circle shape that expands on interaction.
export const CircleExpand = styled.div`
    width: 250px;  // Smaller size for mobile
  height: 250px;  // Smaller size for mobile
  border-radius: 50%;
  background-color: ${props => props.lineColor || '#00DFA2'};
  box-shadow: 0 0 8px ${props => props.shadowColor || '#00DFA2'};
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 501px) {
    width: 350px;  // Increased size for tablets
    height: 350px;  // Increased size for tablets
  }

  @media (min-width: 801px) {
    width: 450px;  // Original size for desktops and larger screens
    height: 450px;  // Original size for desktops and larger screens
  }
`;

// Square that rotates upon a certain action.
export const SquareRotate = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  transition: transform 0.5s;

  &:hover {
    transform: rotate(45deg);
  }
`;

// Triangle that tilts upon interaction.
export const TriangleTilt = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid yellow;
  transition: transform 0.5s;

  &:hover {
    transform: skewY(10deg);
  }
`;

// Star shape that pulses using keyframes.


export const StarPulse = styled.div`
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  width: 100px;
  height: 100px;
  background-color: gold;
  animation: ${pulseAnimation} 1s infinite;
`;

// Polygon that jitters using keyframes.
const jitterAnimation = keyframes`
  0% { transform: translate(0); }
  25% { transform: translate(-5px, 5px); }
  50% { transform: translate(5px, -5px); }
  75% { transform: translate(-5px, -5px); }
  100% { transform: translate(5px, 5px); }
`;

export const PolygonJitter = styled.div`
  width: 90px;
  height: 90px;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  background-color: orange;
  animation: ${jitterAnimation} 0.5s infinite;
`;

// ------------------------------
// Image animations, styling, effects:
// ------------------------------

// Image that zooms in slightly upon hover.
export const ImageZoom = styled.img`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

// Image that transitions from grayscale to color when hovered over.
export const ImageGrayscaleToColor = styled.img`
  filter: grayscale(100%);
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(0%);
  }
`;

// Image that tilts in 3D space upon hover.
export const ImageTilt = styled.img`
  transition: transform 0.5s;

  &:hover {
    transform: perspective(500px) rotateX(10deg) rotateY(10deg);
  }
`;

// ... Continue for ImagePan and ImageColorTint ...


// ------------------------------
// Text Modifications:
// ------------------------------

export const DynamicFont = styled.span`
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 'normal'};
`;

export const FontFamilySwitcher = styled.span`
  font-family: ${props => props.font || 'Arial, sans-serif'};
`;

export const ColoredText = styled.span`
  color: ${props => props.color || 'black'};
`;

export const WeightedText = styled.span`
  font-weight: ${props => props.weight || 'normal'};
`;

export const ItalicText = styled.span`
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`;

export const UnderlinedText = styled.span`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;

export const UpperCaseText = styled.span`
  text-transform: uppercase;
`;

export const LowerCaseText = styled.span`
  text-transform: lowercase;
`;

export const LetterSpacingText = styled.span`
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`;

export const LineHeightText = styled.span`
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
`;

// ------------------------------
// On Hover:
// ------------------------------

const elevateAnimation = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
`;

export const HoverElevateText = styled.span`
  &:hover {
    animation: ${elevateAnimation} 0.3s forwards;
  }
`;

export const ImageRevealDescription = styled.figure`
  background-image: url(${props => props.src});
  width: 200px;
  height: 200px;
  position: relative;
  
  &::before {
    content: '${props => props.caption}';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const HoverRotateDiv = styled.div`
  &:hover {
    transform: rotate(10deg);
  }
`;

// ... Continue for other hover effects ...
// --------------
// On Hover:
// --------------

// TextUnderlineSlide
export const TextUnderlineSlide = styled.span`
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

// BackgroundFade
export const BackgroundFade = styled.div`
  background-color: #f5f5f5; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// HoverScale
export const HoverScale = styled.div`
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// BorderGlow
export const BorderGlow = styled.div`
  border: 2px solid #f5f5f5;
  transition: border-color 0.3s;

  &:hover {
    border-color: #e0e0e0;
  }
`;

// FlipOnHover
export const FlipOnHover = styled.div`
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

// ShakeOnHover
const shakeAnimation = keyframes`
  0% { transform: translate(0); }
  25% { transform: translate(-5px); }
  50% { transform: translate(5px); }
  75% { transform: translate(-5px); }
  100% { transform: translate(0); }
`;

export const ShakeOnHover = styled.div`
  &:hover {
    animation: ${shakeAnimation} 0.5s;
  }
`;
// HoverSlideRight
export const HoverSlideRight = styled.div`
  transform: translateX(0);
  transition: transform 0.3s;

  &:hover {
    transform: translateX(10px);
  }
`;

// BackgroundZoom
export const BackgroundZoom = styled.div`
  background: url(${props => props.bgImage}) center/100% no-repeat;
  transition: background-size 0.4s;

  &:hover {
    background-size: 120%;
  }
`;

// HoverPush
export const HoverPush = styled.button`
  transform: scale(1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.95);
  }
`;

// HoverBounce
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export const HoverBounce = styled.div`
  &:hover {
    animation: ${bounceAnimation} 1s;
  }
`;

// HoverColorShift
export const HoverColorShift = styled.div`
  background-color: #f5f5f5;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0099cc;
  }
`;

// HoverBlur
export const HoverBlur = styled.div`
  filter: blur(0);
  transition: filter 0.3s;

  &:hover {
    filter: blur(4px);
  }
`;

// HoverSquish
export const HoverSquish = styled.div`
  transform: scaleY(1);
  transition: transform 0.3s;

  &:hover {
    transform: scaleY(0.9);
  }
`;

// HoverWobble
const wobbleAnimation = keyframes`
  0% { transform: rotate(0); }
  30% { transform: rotate(-5deg); }
  60% { transform: rotate(5deg); }
  100% { transform: rotate(0); }
`;

export const HoverWobble = styled.div`
  &:hover {
    animation: ${wobbleAnimation} 0.5s;
  }
`;

// HoverPop
export const HoverPop = styled.div`
  transform: scale(1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

// HoverSwing
const swingAnimation = keyframes`
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const HoverSwing = styled.div`
  &:hover {
    animation: ${swingAnimation} 1s;
  }
`;

// HoverSpin
export const HoverSpin = styled.div`
  transition: transform 0.6s;

  &:hover {
    transform: rotate(360deg);
  }
`;
export const ChangeTextColorOnHover = styled.div`
  transition: 0.3s all;
  &:hover {
    color: ${props => props.hoverColor ||props.color };  // defaults to blue if no hoverColor provided
  }
`;


/// ON CLICK////////////////////////////////

// Animations and mixins
const shake = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
`;

// Components

export const ClickShake = styled.div`
  &:active {
    animation: ${shake} 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }
`;

export const ClickFade = styled.div`
  opacity: 1;
  transition: opacity 0.3s;

  &:active {
    opacity: 0;
  }
`;

export const ClickPush = styled.div`
  transform: scale(1);
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const ClickBounce = styled.div`
  &:active {
    animation: bounce 0.3s;
  }
`;

export const ClickRipple = styled.div`
  // This is a simplified version and can be enhanced further
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0.4));
    transform: scale(0);
    transition: transform 0.5s, opacity 1s;
    opacity: 0;
  }

  &:active:after {
    transform: scale(4);
    opacity: 0.6;
  }
`;

export const ClickColorChange = styled.div`
  color: black;

  &:active {
    color: red;  // Example color, adjust as needed
  }
`;

export const ClickRotate = styled.div`
  transition: transform 0.3s;

  &:active {
    transform: rotate(90deg);
  }
`;

export const ClickFlip = styled.div`
  transition: transform 0.3s;
  transform-style: preserve-3d;

  &:active {
    transform: rotateY(180deg);
  }
`;

export const ClickZoom = styled.div`
  transition: transform 0.3s;

  &:active {
    transform: scale(1.5); // Example scale factor, adjust as needed
  }
`;

export const ClickSlide = styled.div`
  transition: transform 0.3s;

  &:active {
    transform: translateX(100px); // Example translation, adjust as needed
  }
`;

export const ClickPulse = styled.div`
  // Add pulse animation here
`;

export const ClickJiggle = styled.div`
  // Add jiggle animation here
`;

export const ClickSquish = styled.div`
  // Add squish animation here
`;

export const ClickBackgroundFill = styled.div`
  transition: background-color 0.3s;

  &:active {
    background-color: blue; // Example color, adjust as needed
  }
`;

export const ClickBorderExpand = styled.div`
  border: 1px solid black; // Default state
  transition: border 0.3s;

  &:active {
    border-width: 5px;  // Example width, adjust as needed
  }
`;

export const ClickShadowGrow = styled.div`
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5); // Default state
  transition: box-shadow 0.3s;

  &:active {
    box-shadow: 0px 0px 15px rgba(0,0,0,0.8);  // Example shadow, adjust as needed
  }
`;

export const ClickTextReveal = styled.div`
  // The actual implementation may vary based on the desired effect
`;

export const ClickWave = styled.div`
  // Add wave animation here
`;

export const ClickTilt = styled.div`
  transition: transform 0.3s;

  &:active {
    transform: skewX(20deg);  // Example skew, adjust as needed
  }
`;

export const ClickVibrate = styled.div`
  // Add vibrate animation here
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const gradientAnimation = css`
  animation: ${gradientShift} 6s linear infinite;
`;

const getColor = (color) => {
  return color || 'transparent';
};

export const HoverGradientShift = styled.div`
  width:${props => props.width||300}px;
  height:${props => props.height||200}px;
    background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
    ${gradientAnimation}

  &:hover {
    background: linear-gradient(to right, ${props => getColor(props.hoverStartColor)}, ${props => getColor(props.hoverEndColor)});
    animation-direction: reverse;
  }
`;

export const GradientBackground = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(${props => props.direction || 'to right'}, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
`;


export const GradientText = styled.h1`
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  -webkit-background-clip: text;
  color: transparent;
`;




export const GradientBorder = styled.div`
  width: 150px;
  height: 150px;
  border: 5px solid transparent;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  background-clip: padding-box;
`;

export const AnimatedGradient = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  ${gradientAnimation}
`;

export const GradientMask = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, black);
    opacity: 0.5;
  }
`;

export const GradientButton = styled.button`
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(to right, ${props => getColor(props.endColor)}, ${props => getColor(props.startColor)});
  }
`;

export const GradientScrollbar = styled.div`
  width: 300px;
  height: 500px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background: linear-gradient(to bottom, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    background-clip: padding-box;
  }
`;

export const GradientShadow = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: 5px 5px 20px -5px #888888, inset 0px 0px 5px 0px #ffffff;
  ${gradientAnimation}
`;

export const GradientIconFill = styled.div`
  width: 150px;
  height: 150px;
  background: url('your-icon-url.png') center/cover;
  mask: linear-gradient(to right, transparent, black);
  mask-composite: destination-out;
  background-clip: padding-box;
`;

// Usage example:
/* 
<GradientBackground startColor="#ff6e7f" endColor="#bfe9ff" />
<GradientText startColor="#ff6e7f" endColor="#bfe9ff">Gradient Text</GradientText>
<HoverGradientShift startColor="#ff6e7f" endColor="#bfe9ff" />
<GradientBorder startColor="#ff6e7f" endColor="#bfe9ff" />
<AnimatedGradient startColor="#ff6e7f" endColor="#bfe9ff" />
<GradientMask />
<GradientButton startColor="#ff6e7f" endColor="#bfe9ff">Gradient Button</GradientButton>
<GradientScrollbar startColor="#ff6e7f" endColor="#bfe9ff">
  Scrollable content
</GradientScrollbar>
<GradientShadow startColor="#ff6e7f" endColor="#bfe9ff" />
<GradientIconFill /> 
*/


const glowingAnimation = keyframes`
0% {
  box-shadow: 0 0 1px #FFF;
}
50% {
  box-shadow: 0 0 3px #FFF, 0 0 8px #FFF;
}
100% {
  box-shadow: 0 0 2px #FFF;
}
`;



const glowingAnimation2 = keyframes`
0% {
  box-shadow: 0 0 1px #00DFA2;
}
50% {
  box-shadow: 0 0 3px #00DFA2, 0 0 8px #00DFA2;
}
100% {
  box-shadow: 0 0 2px #00DFA2;
}
`;
const liftEffect = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

`;


export const SkillTag = styled.span`
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 0px;
  margin-right: 10px;
  color: ${props => props.textColor || '#00DFA2'};
  background-color: ${props => props.bgColor || '#E8FFCE'};
  animation: ${glowingAnimation} 1.5s infinite;
  ${liftEffect};

  @media (max-width: 600px) {
    padding: 3px 5px;  // reduced padding for mobile
    margin-right: 5px; // reduced margin for mobile
  }
`;

export const BulletPoints = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > div {
    color: ${props => props.noteColor || '#000'};
    background-color: ${props => props.BulletPointColor || '#4A90E2'};
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.3s;
    animation: ${glowingAnimation} 1.5s infinite;
    transform: scale(1.1);

  
  }
`;

export const CardGlassMorphic = styled.div`
  display: flex;
  position: relative;
  height: 80vh;
  width: 80vw;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
`;

// ListItem styled component
export const ListItem = styled.li`
  padding: 5px 10px;
  &:before {
    content: '•';
    color: ${props => (props.green ? 'neon green' : props.red ? 'neon red' : 'black')};
    margin-right: 10px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // To wrap tags if there are many
  margin-top: 10px;
`;
// Transparent Container
export const TransparentContainer = styled.div`
  background: transparent;
  padding: 0;
  margin: 0;
`;

// Title
export const Title = styled.h4`
  color: #ffffff;
  margin-bottom: 20px;
`;

// Glowing Ball for bullet points
export const GlowingBall = styled.span`
  display: inline-block;

  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.color || 'green'};
  box-shadow: 0 0 5px ${props => props.color || 'green'};
  animation: ${glowingAnimation} 1.5s infinite;

  
`;

// Note
export const Note = styled.span`
margin-bottom:120px;
  background-color: ${props => props.bgColor || 'green'};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${props => props.textColor || '#ffffff'};
  animation: ${glowingAnimation} 3s infinite;

`;

// Tag
export const Tag = styled.span`
  background-color: ${props => props.bgColor || '#000000'};
  color: ${props => props.textColor || '#ffffff'};
  padding: 2px 5px;
  border-radius: 10px;
  margin-left: 10px;
`;
const moveBackground = keyframes`
  0% {
    background-position: -10px 0;
  }
  50% {
    background-position: 10px 0;
  }
  100% {
    background-position: -10px 0;
  }
`;
const moveContainer = keyframes`
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
`;


export const CardContainer = styled.div`
  display: flex;
 
  
  overflow-x: auto;
  white-space: nowrap;
  height: 1000px;
  margin-top:0px;
  margin-left:50px;
  padding-top:100px;
  margin-bottom:0px;
  
  
  
  max-width: 100%;  // Adjust if needed
  
  // Set a gradient background

  
  animation: ${moveContainer} 4s infinite;

  
  // Hover effect
  
  &::after {
    content: "";
    position: absolute;
    left:300px;
    right: 0;
    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
    top: 0; // This sets the horizontal line at the top
  }
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    right: 0;

    height: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
    top: 100%; // This sets the horizontal line at the top
  }
  & > * {
    margin-right: 40px;
  }
  &::-webkit-scrollbar {
    display: none;  // Hide scrollbar for Chrome, Safari and Opera
  }
  scrollbar-width: none;  // Hide scrollbar for IE and Edge
   @media (max-width: 701px) {
    margin-left:1px;
    margin-right:2px;
  }
`;

