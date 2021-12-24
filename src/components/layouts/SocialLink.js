import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, Facebook, Twitter, YouTube } from "../../data/svgs";
import SocialIcon from "./SocialIcon";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.clicked ? props.theme.body : props.theme.text};
`;
const SocialLink = ({ clicked }) => {
  return (
    <Icons clicked={clicked}>
      <SocialIcon
        Icon={Github}
        link="https://github.com/taehyun9202"
        delay={0}
      />
      <SocialIcon
        Icon={Facebook}
        link="https://www.facebook.com/taehyun.nam.9"
        delay={0.2}
      />
      <SocialIcon
        Icon={Twitter}
        link="https://twitter.com/?lang=en"
        delay={0.4}
      />
      <SocialIcon Icon={YouTube} link="https://www.youtube.com/" delay={0.6} />
      <Line
        clicked={clicked}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialLink;
