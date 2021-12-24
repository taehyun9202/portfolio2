import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../asset/images/bg.jpg";
import BlogBox from "../components/Blog/BlogBox";
import PowerButton from "../components/buttons/PowerButton";
import LogoText from "../components/layouts/LogoText";
import SocialLink from "../components/layouts/SocialLink";
import { Blogs } from "../data/BlogData";
import AnchorComponet from "../components/Blog/AnchorComponent";
import BigTitle from "../components/layouts/BigTitle";
import { motion } from "framer-motion";
const MainContainer = styled(motion.div)`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: auto;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
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

const BlogPage = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 25;
    setNumber(parseInt(num));
  }, []);
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoText />
        <PowerButton />
        <SocialLink />
        <AnchorComponet number={number} />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogBox key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
      </Container>
      <BigTitle text="BLOG" top="5rem" left="5rem" />
    </MainContainer>
  );
};

export default BlogPage;
