import React from "react";
import styled from "styled-components";
import Navbar from "../SubComponents/Navbar";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_EVENTS } from "../utils/queries";

import party1 from "../assets/party1.jpg";
import event2 from '../assets/event2.jpg'
import img2 from "../assets/img2.png";


const Section = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  background-color: lavender;
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
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 0.5rem 2rem;
  font-size: 2rem;
  border: 1px solid red;

  h2 {
    /* padding: 1rem; */
    font-size: 2rem;
  }
`;

const NewsBox = styled.div`
  width: 80%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid red;
`;

const MainContainer = styled.div`
  width: 35vw;
  height: 40vh;
  /* background-color: burlywood; */
  /* border: 1px solid brown; */
  margin: 1rem;
  position: relative;
  transition: all 0.2s ease;

  &:hover{
      transform: scale(1.1);
    }
`;

const ImagContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: fill;
  
  img {
    width: 35vw;
    height: 40vh;
    
  }
`;

const Event = styled.div`
position: absolute;
bottom: 1rem;
left: 0.5rem;
z-index: 5;
color: white;
padding: 4px;
/* border: 1px solid yellow; */

h1{
  font-size: 2rem;
  cursor: pointer;
}

h2{
  color: orange;
  font-size: 1rem;
}

h3{
  font-size: 0.9rem;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const NewContainer = ({ img, type, link, event, location, date}) => {
  return (
    <MainContainer>
      <ImagContainer>
        <img src={img} alt="news" />
      </ImagContainer>
      <Event>
      <h2>{type}</h2>
      
      <h1>{event}</h1>
      <Details>
      <h3>{location}</h3>
      <h3>{date}</h3>
      </Details>
      </Event>
    </MainContainer>
  );
};


const Events = () => {
  const { loading, data: eventData } = useQuery(QUERY_EVENTS);
  console.log(eventData);
  
  return (
    

    <Section>
      <Navbar />
      <Heading>
        <h1>Beach news..</h1>
        <h2>Look what's happening around </h2>
      </Heading>
      <NewsBox>
        <NewContainer img={party1} type="Experience" link="//beacheventsvb.com/events/oceanfront-concert-series-carbon-leaf/" event="Splash Electronic dance party" location="Virginia beach" date="11/06/2022" />
        <NewContainer img={party1} type="Experience" event="Splash Electronic dance party" date="11/06/2022" />
        <NewContainer img={event2} type="Concert" event="Splash Electronic dance party" date="11/06/2022" />
        <NewContainer img={party1} type="Experience" event="Splash Electronic dance party" date="11/06/2022" />
        <NewContainer img={party1} type="Experience" event="Splash Electronic dance party" date="11/06/2022" />
        <NewContainer img={party1} type="Experience" event="Splash Electronic dance party" date="11/06/2022" />
      </NewsBox>
    </Section>
  );
};


// <Section>
//       <BlackWrapper />
//       <Navbar />
//       <ImageContainer>
//         <img src={img2} alt="beach" />
//       </ImageContainer>
//     </Section>

export default Events;
