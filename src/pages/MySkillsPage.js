import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PowerButton from "../components/buttons/PowerButton";
import BigTitle from "../components/layouts/BigTitle";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";
import ParticleComponent from "../components/Skill/ParticleComponent";
import { Design, Develope } from "../data/svgs";
import { lightTheme } from "../utils/Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  width: 30vw;
  padding: 2rem;
  min-height: 400px;
  height: 60vh;
  max-height: 500px;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono" monospace;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  gap: 1.5rem;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LogoText />
      <PowerButton />
      <SocialLink />
      {/* <ParticleComponent theme="light" /> */}
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} fill="currentColor" /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minumal and
            simple
          </Description>

          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tool</strong>
            <ul>
              <li>Figma</li>
              <li>Draw io</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} fill="currentColor" /> Developer
          </Title>
          <Description>
            I value business or brand for which i am creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>React, Nextjs, Redux, Sass, Tailwindcssetc.</p>
          </Description>
          <Description>
            <strong>tools</strong>
            <p>VS code, Github, Postman, Aws etc</p>
          </Description>
        </Main>
      </Box>
      <BigTitle text="SKILLS" top="80%" right="30%" />
    </ThemeProvider>
  );
};

export default MySkillsPage;
