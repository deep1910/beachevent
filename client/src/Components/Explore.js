import React from "react";
import styled from "styled-components";
import AccomCube from "../SubComponents/AccomCube";
import Button from "../SubComponents/Button";

import Navbar from "../SubComponents/Navbar";
import EventCube from '../SubComponents/EventCube'

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(32, 32, 32, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Heading = styled.div`
  width: 80%;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  text-align: center;
  /* border: 1px solid black; */
`;

const Accomo = styled.div`
  width: 80%;
  height: 60vh;
  position: relative;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  /* border: 2px solid green; */
  /* justify-content: space-between; */
  /* padding: 1rem; */
`;

const Details = styled.div`
  width: 65%;
  height: 100%;
  position: absolute;
  left: 35%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  /* align-items: center; */
  padding: 0 1rem;
  box-sizing: border-box;
  /* margin-right: 1rem; */
  /* border: 1px solid yellow; */

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  a {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Event = styled.div`
  width: 90%;
  height: 55vh;
  /* border: 2px solid green; */
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EventDetails = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
  /* border: 1px solid yellow; */

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  a {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Explore = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Heading>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          perferendis deleniti alias, facilis dicta rem accusamus! Dolores
          commodi consequatur ipsam sequi facilis asperiores voluptatibus
          placeat?jcbb c bckbc w hjwcbhjbchj chj x2xb jb xb
        </Heading>
        <Accomo>
          <AccomCube />
          <Details>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos eum illo eius ducimus dolore eveniet voluptate
              provident autem dolores perferendis.
            </p>
            <Button text="Discover More ->" link="/accomodations" />
          </Details>
        </Accomo>
        <Event>
          <EventDetails>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repellendus ea excepturi corrupti nesciunt id nemo cupiditate error
          quisquam soluta, minima provident illo, iusto consectetur hic,
          beatae reprehenderit nisi quod repudiandae!
          </p>
          <Button text="Discover More ->" link="/events" />
          </EventDetails>
          <EventCube/>
        </Event>
      </Section>
    </>
  );
};

export default Explore;
