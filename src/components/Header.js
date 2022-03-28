import React from "react";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "@mui/material/Link";
import "../index.css";
import { Buscador } from "./Buscador";

export const Header = () => {
  return (
    <>
      <div className="title animate__animated animate__fadeIn">
        <div className="social animate__animated animate__fadeIn">
          <Link
            href="https://www.facebook.com/indubolsaspopayan"
            target={"_blank"}
          >
            <Facebook color="primary" fontSize="large"></Facebook>
          </Link>
          <Link
            href="https://www.instagram.com/indubolsaspopayan/"
            target={"_blank"}
          >
            <Instagram
              style={{
                color: "pink",
              }}
              fontSize="large"
            ></Instagram>
          </Link>
          <Link
            href="https://wa.me/573128732917?text=Hola,%20quisiera%20saber"
            target={"_blank"}
          >
            <WhatsApp style={{ color: "green" }} fontSize="large"></WhatsApp>
          </Link>
        </div>

        <img
          className="animate__animated animate__fadeIn"
          src="https://res.cloudinary.com/canaclc/image/upload/v1648151805/induimages/logo_hyttcw.png"
          alt="Imagen 1"
        ></img>
        <Buscador></Buscador>
      </div>
    </>
  );
};
