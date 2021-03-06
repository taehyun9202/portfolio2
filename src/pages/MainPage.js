import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PowerButton from "../components/buttons/PowerButton";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";
import MainIntro from "../components/Main/MainIntro";
import { YinYang } from "../data/svgs";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.clicked ? "85%" : "50%")};
  left: ${(props) => (props.clicked ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BlogLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WorkLink = styled(NavLink)`
  color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const AboutLink = styled(NavLink)`
  color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const SkillLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.clicked ? "50%" : "0%")};
  height: ${(props) => (props.clicked ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 0.5s ease 0.5s;
`;

const MainPage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <MainContainer>
        <Container>
          <DarkDiv clicked={clicked}></DarkDiv>
          <LogoText color={clicked ? "dark" : "light"} />
          <PowerButton />
          <SocialLink clicked={clicked} />
          <Center clicked={clicked}>
            <YinYang
              onClick={() => setClicked(!clicked)}
              width={clicked ? 100 : 200}
              height={clicked ? 100 : 200}
              fill="currentColor"
            />
            {!clicked && <span>click here...</span>}
          </Center>

          <Contact target="_blank" href="mailto:taehyun9202@hotmail.com">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi...
            </motion.h2>
          </Contact>

          <BlogLink to="/blog">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h2>
          </BlogLink>

          <WorkLink clicked={clicked} to="/work">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
            </motion.h2>
          </WorkLink>

          <BottomBar>
            <AboutLink clicked={clicked} to="/about">
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.h2>
            </AboutLink>

            <SkillLink to="/skill">
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills
              </motion.h2>
            </SkillLink>
          </BottomBar>
        </Container>
        {clicked && <MainIntro clciked={clicked} />}
      </MainContainer>
    </div>
  );
};

export default MainPage;
