import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Tarjetas } from "./Tarjetas";
import "../index.css";
import { ImageCarrousel } from "./ImageCarrousel";
export const Home = () => {
  const { data: images } = useFetchGifs();

  return (
    <>
      <ImageCarrousel />

      <div className="card2 animate__animated animate__fadeIn">
        {images
          // .filter((data) => data.promo === false)
          .map((data) => (
            <Tarjetas key={data.id} {...data} />
          ))}
      </div>
    </>
  );
};
