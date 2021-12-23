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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.clicked ? props.theme.body : props.theme.text};
`;
const SocialLink = ({ clicked }) => {
  return (
    <Icons clicked={clicked}>
      <SocialIcon Icon={Github} link="https://github.com/taehyun9202" />
      <SocialIcon
        Icon={Facebook}
        link="https://www.facebook.com/taehyun.nam.9"
      />
      <SocialIcon Icon={Twitter} link="https://twitter.com/?lang=en" />
      <SocialIcon Icon={YouTube} link="https://www.youtube.com/" />
      <Line clicked={clicked} />
    </Icons>
  );
};

export default SocialLink;
