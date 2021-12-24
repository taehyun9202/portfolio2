import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import PowerButton from "../components/buttons/PowerButton";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";
import { darkTheme } from "../utils/Themes";
import { Works } from "../data/WorkData";
import Card from "../components/Work/Card";
import { YinYang } from "../data/svgs";
import BigTitle from "../components/layouts/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <LogoText color="dark" />
      <PowerButton />
      <SocialLink />
      <Box>
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Works.map((work) => (
            <Card work={work} key={work.id} />
          ))}
        </Main>
      </Box>
      <Rotate ref={yinyang}>
        <YinYang width={80} height={80} fill={darkTheme.text} />
      </Rotate>

      <BigTitle text="WORK" top="10%" right="20%" />
    </ThemeProvider>
  );
};

export default WorkPage;
