import React from "react";
import styled from "styled-components";
import Navbar from "../SubComponents/Navbar";

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  background-color: lavender;
`;

const Heading = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
font-size: 2rem;

h2{
    padding: 1rem;
    font-size: 2rem;

}
`

const NewsBox = styled.div`

`

const NewsContainer = styled.div``

const News = () => {
  return (
    <Section>
      <Navbar />
      <Heading>
      <h1>Beach news..</h1>
      <h2>Look what's happening around </h2>
      </Heading>
      <NewsBox>
      <NewsContainer>
      
      </NewsContainer>
      </NewsBox>
    </Section>
  );
};

export default News;
