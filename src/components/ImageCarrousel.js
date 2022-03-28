import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "../index.css";
export const ImageCarrousel = () => {
  // const BASE_IMG = process.env.REACT_APP_BASE_API;
  const images = [
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/BURBUJAS-2_bx6dix.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/PITILLOS-2_zxkbzd.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/VERDE_lnplth.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/PLASTICO-FRUTAS_c0m56e.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/VERDE_lnplth.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/TENEDORES-2_on1wz4.jpg`,
    },
  ];
  return (
    <div className="wrap">
      <Carousel
        className="wrap"
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
        // centerMode={true}
        // centerSlidePercentage={70}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        <div>
          <img src={images[0].url} alt="" />
        </div>
        <div>
          <img src={images[1].url} alt="" />
        </div>
        <div>
          <img src={images[2].url} alt="" />
        </div>
        <div>
          <img src={images[3].url} alt="" />
        </div>
        <div>
          <img src={images[4].url} alt="" />
        </div>
        <div>
          <img src={images[5].url} alt="" />
        </div>
      </Carousel>
    </div>
  );
};
