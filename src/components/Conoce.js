import React from "react";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
export const Conoce = () => {
  const images = [
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648598933/induimages/TARROS-PLASTICOS_ubwv2o.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648599533/induimages/PAPEL-ALUMINIO-262x300_o7fytx.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648598932/induimages/ZUNCHO_zhx5tt.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648598932/induimages/ROLLO-DE-STRECH-262x300_shmdxc.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648598932/induimages/NEVERAS-DE-ICOPOR-262x300_ruhjcd.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648599200/induimages/CINTA-PELIGRO-262x300_omb6lr.jpg`,
    },
    {
      url: `https://res.cloudinary.com/canaclc/image/upload/v1648599487/induimages/ESTOPAS-262x300_gchkj1.jpg`,
    },
  ];
  return (
    <>
      <h1 className="animate__animated animate__fadeIn titulo-conoce">
        Conoce algunos de nuestros productos
      </h1>
      <div className="conoce">
        <Carousel
          interval={1000}
          centerSlidePercentage={40}
          centerMode={true}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
          emulateTouch={true}
        >
          <div>
            <img src={images[0].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[1].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[2].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[3].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[4].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[5].url} alt="" className="uno" />
          </div>
          <div>
            <img src={images[6].url} alt="" className="uno" />
          </div>
        </Carousel>
      </div>
    </>
  );
};
