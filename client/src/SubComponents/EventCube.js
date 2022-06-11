import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./AccomoStyles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";
import styled from 'styled-components'

const Container = styled.div`
width: auto;
height: auto;

.swiper{
  width: 300px;
  height: 300px;
  position: absolute;
  right: 5%;
  top: -15%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
`

const AccomCube = () => {
  return (
    <Container>
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="accomo1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="accomo2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="accomo3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="accomo4" />
      </SwiperSlide>
    </Swiper>
  </Container>
  )
}

export default AccomCube