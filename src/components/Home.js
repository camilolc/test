import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { Tarjetas } from "./Tarjetas";
import "../index.css";
import { ImageCarrousel } from "../components/ImageCarrousel";
import { Conoce } from "../components/Conoce";
export const Home = () => {
  // const { data: images } = useFetchGifs();

  return (
    <div className="animate__animated animate__zoomInDown">
      <ImageCarrousel />

      {/* <div className="card2 animate__animated animate__fadeIn">
         {images
          // .filter((data) => data.promo === false)
          .map((data) => (
            <Tarjetas key={data.id} {...data} />
          ))} 
      </div> */}
      <Conoce></Conoce>
    </div>
  );
};
