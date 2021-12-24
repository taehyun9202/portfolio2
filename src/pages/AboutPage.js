import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PowerButton from "../components/buttons/PowerButton";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";
import { darkTheme } from "../utils/Themes";
import spaceman from "../asset/images/spaceman.png";
import { keyframes } from "styled-components";
import BigTitle from "../components/layouts/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% {transform:translateY(-10px)}
  50% {transform:translateY(15px) translateX(15px)}
  100% {transform:translateY(-10px)}
`;

const Image = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  z-index: 2;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono" monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LogoText color="dark" />
      <PowerButton />
      <SocialLink />
      <Image>
        <img src={spaceman} alt="spaceman" />
      </Image>
      <Box>
        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>
      </Box>
      <BigTitle text="ABOUT" top="10%" left="5%" />
    </ThemeProvider>
  );
};

export default AboutPage;
