import React from "react";
import styled from "styled-components";
import profile from "../../asset/images/profile.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60vw;
  height: 45vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
    margin: auto;
    max-width: 500px;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  }
`;

const MainIntro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "45vh" }}
      transition={{ type: "spring", duration: 1, delay: 0.5 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I am Tyler</h3>
          <h6>I desgin and code simple yet beautiful websites</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img className="pic" src={profile} alt="Profile" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default MainIntro;
