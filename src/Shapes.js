import React from 'react';
import styled from 'styled-components';

const Shape = styled.div`
  width: 100vw;
  height: 700px;  // You can adjust the height as per your needs
  background: #0077B5;
  margin-bottom: 20px;
  transform-origin: top left;  // This ensures that the skew starts from the top left corner
`;
const ShapeRight = styled.div`
  width: 100vw;
  height: 700px;  // You can adjust the height as per your needs
  background: #0077B5;
  margin-top: 520px;
  transform-origin: top right;  // This ensures that the skew starts from the top left corner
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  margin-top:1000px;
  display: inline-block;  // Makes triangles sit next to each other
`;
const TriangleLeft = styled(Triangle)`
  border-width: 700px 100vw 0 0;
  border-color: #0077B5 transparent transparent transparent;
`;

const TriangleRight = styled(Triangle)`
  border-width: 700px 0 0 100vw;
  border-color: #0077B5 transparent transparent transparent;
`;



const Shape1 = styled(Shape)`
  transform: skew(10deg, 10deg);
`;

const Shape2 = styled(Shape)`
  transform: skew(-10deg, 10deg);
`;

const Shape3 = styled(Shape)`
  transform: skew(20deg, -20deg);
`;

const Shape4 = styled(Shape)`
  transform: skew(10deg, -10deg);
`;

const Shape5 = styled(Shape)`
  transform: skew(0deg, -20deg);
`;

const Shape6 = styled(Shape)`
  transform: skew(-20deg, 10deg);
`;

const Shape7 = styled(ShapeRight)`
  transform: skew(0deg,-20deg);
`;

const Shape8 = styled(Shape)`
  transform: skew(0deg,20deg);
`;

const SkewedSections = () => {
  return (
    <div>
      
      <Shape5></Shape5>
      <Shape8></Shape8>
      <Shape7></Shape7>

      <TriangleLeft></TriangleLeft>
      <TriangleRight></TriangleRight>

      
    </div>
  );
}

export default SkewedSections;
