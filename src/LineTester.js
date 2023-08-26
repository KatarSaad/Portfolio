import React from 'react';
import {
    GrowHorizontalLine, GrowVerticalLine, DottedLineExpand, LineBreathe,
    GlowingLine, LinePulse, DashAnimatedLine, LineShrink,
    ColorTransitionLine, WavyLine
} from './StyledComp';  // Update the path
import styled, { css, keyframes } from 'styled-components';
const LineContainer = styled.div`
  &:hover ${GrowHorizontalLine} {
    width: 100%;
  }
`;

const LineTester = () => {
  return (
    <div style={{ padding: "20px" }}>
      <LineContainer>
        <h2>Grow Horizontal Line</h2>
        <GrowHorizontalLine />
      </LineContainer>

      {/* ... same for other lines ... */}
    </div>
  );
};
export default LineTester;