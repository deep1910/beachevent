import React from 'react'
import styled from 'styled-components'
import Navbar from '../SubComponents/Navbar'
import img2 from '../assets/img2.png'


const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */
`

const BlackWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 1;
background-color: rgba(32,32,32,0.3);
`

const ImageContainer = styled.div`
width: 100%;
height: calc(100vh - 6rem);

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const Events = () => {
    return (
        <Section>
        <BlackWrapper/>
    <Navbar/>
    <ImageContainer>
    <img src={img2} alt="beach" />
    </ImageContainer>
    </Section>
  )
}

export default Events