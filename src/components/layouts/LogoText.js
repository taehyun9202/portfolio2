import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../utils/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : lightTheme.text};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoText = ({ color = "light" }) => {
  return <Logo color={color}>TylerN</Logo>;
};

export default LogoText;
