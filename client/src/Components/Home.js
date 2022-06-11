import React from "react";
import styled from "styled-components";

import Navbar from "../SubComponents/Navbar";
import Slides from "../SubComponents/Slides";
import img1 from "../assets/img1.png";
import Button from "../SubComponents/Button";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BlackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(32, 32, 32, 0.3);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Heading = styled.div`
  position: absolute;
  top: 8rem;
  color: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const About = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1``;

const Subtext = styled.h2``;

const Home = () => {
  return (
    <Section>
      <BlackWrapper />
      <Navbar />
      <ImageContainer>
        <img src={img1} alt="beach" />
      </ImageContainer>
      <Heading>
        <h2>Welcome to</h2>
        <h1>Beachvent</h1>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed
          repellendus earum. Nihil eum necessitatibus impedit asperiores
          pariatur ipsam consequuntur possimus! Veniam aperiam quas alias?
        </h3>
      </Heading>
      <About>
      <Text>Beachvent</Text>
      <Subtext>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem animi,
          dolores nulla accusantium nesciunt dolorum tenetur alias sapiente
          dolore repellat laudantium adipisci fuga ducimus repudiandae, cum ipsa
          sint dolorem eum.Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Rem animi, dolores nulla accusantium nesciunt dolorum tenetur
          alias sapiente dolore repellat laudantium adipisci fuga ducimus
          repudiandae, cum ipsa sint dolorem eum.
        </Subtext>
        <Slides />
        <Button text="Explore Us ->" link="/explore" />
      </About>
    </Section>
  );
};

export default Home;
