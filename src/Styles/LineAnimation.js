import styled, { keyframes } from 'styled-components';

// Horizontal line that grows in width upon hover.
export const GrowHorizontalLine = styled.div`
  height: 2px;
  background-color: ${props => props.lineColor || '#333'};
  width: 50%;
  transition: width 0.3s;

  &:hover {
    width: 100%;
  }
`;

// Vertical line that grows in height upon hover.
export const GrowVerticalLine = styled.div`
  width: 2px;
  background-color: ${props => props.lineColor || '#333'};
  height: 50%;
  transition: height 0.3s;

  &:hover {
    height: 100%;
  }
`;

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
  height: 2px;
  background-color: ${props => props.lineColor || '#333'};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 8px ${props => props.shadowColor || '#333'};
  }
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: blue;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
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
const ChangeTextColorOnHover = styled.div`
  transition: 0.3s all;
  &:hover {
    color: ${props => props.hoverColor || 'blue'};  // defaults to blue if no hoverColor provided
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
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const gradientAnimation = css`
  animation: ${gradientShift} 3s linear infinite;
`;

const getColor = (color) => {
  return color || 'transparent';
};

export const GradientBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
`;

export const GradientText = styled.h1`
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  -webkit-background-clip: text;
  color: transparent;
`;

export const HoverGradientShift = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, ${props => getColor(props.startColor)}, ${props => getColor(props.endColor)});
  ${gradientAnimation}
  &:hover {
    animation-play-state: paused;
  }
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

