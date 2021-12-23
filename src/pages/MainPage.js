import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PowerButton from "../components/buttons/PowerButton";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";

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

const MainPage = () => {
  return (
    <div>
      <MainContainer>
        <Container>
          <LogoText />
          <PowerButton />
          <SocialLink />

          <Contact target="_blank" href="mailto:taehyun9202@hotmail.com">
            <h3>Say hi...</h3>
          </Contact>

          <BlogLink to="/blog">
            <h3>Blog</h3>
          </BlogLink>
        </Container>
      </MainContainer>
    </div>
  );
};

export default MainPage;
