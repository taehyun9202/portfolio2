import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;
const BigTitle = ({ text, top, left, right }) => {
  return (
    <Text top={top} left={left} right={right}>
      {text}
    </Text>
  );
};

export default BigTitle;
