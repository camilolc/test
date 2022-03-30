import "../index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
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
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/PLASTIC-GREEN_u2vco8.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1647570579/induimages/TENEDORES-2_on1wz4.jpg`,
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      dynamicHeight={true}
      stopOnHover={false}
      useKeyboardArrows={true}
    >
      <div>
        <img src={images[0].url} alt="" />
        <p className="legend ">Plastico Burbuja</p>
      </div>
      <div>
        <img src={images[1].url} alt="" />
        <p className="legend">Papel Parafinado</p>
      </div>
      <div>
        <img src={images[2].url} alt="" />
        <p className="legend">Utensilios Plasticos</p>
      </div>
      <div>
        <img src={images[3].url} alt="" />
        <p className="legend">Bolsa de Cierre Hermètico</p>
      </div>
      <div>
        <img src={images[4].url} alt="" />
        <p className="legend">Tarros Plasticos</p>
      </div>
      <div>
        <img src={images[5].url} alt="" />
        <p className="legend">Cubiertos Desechables</p>
      </div>
    </Carousel>
  );
};
