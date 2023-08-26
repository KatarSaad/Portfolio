import React from 'react';
import styled from 'styled-components';
const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const LevelBarBase = styled.div`
  flex-grow: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-right: 10px;
`;

const LevelBarFill = styled.div`
  height: 100%;
  width: ${props => props.percentage || 0}%;
  background-color: #03C988;
  border-radius: 4px;
  transition: width 0.3s ease-out;
`;

const Level = ({ percentage }) => (
  <LevelContainer>
    <LevelBarBase>
      <LevelBarFill percentage={percentage} />
    </LevelBarBase>
    {percentage}%
  </LevelContainer>
);
export default Level