import React from "react";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import "../index.css";
import { Buscador } from "./Buscador";
import { display } from "@mui/system";

export const Header = () => {
  return (
    <>
      <div className="title animate__animated animate__fadeIn">
        <div style={{ display: "flex" }}>
          <Link
            href="https://www.facebook.com/indubolsaspopayan"
            target={"_blank"}
            className="logo-social"
          >
            <img
              src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_36/v1648572852/induimages/facebook_z9qpku.png"
              alt="Imagen 1"
              style={{
                marginRight: "6px",
              }}
            ></img>
            {/* <Facebook fontSize="large"></Facebook> */}
          </Link>
          <Link
            className="logo-social"
            href="https://www.instagram.com/indubolsaspopayan/"
            target={"_blank"}
          >
            {/* <Instagram
              style={{
                color: "pink",
              }}
              fontSize="large"
            ></Instagram> */}
            <img
              src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_36/v1648573248/induimages/instagram_1_zczgkq.png"
              alt="Imagen 1"
              style={{
                marginRight: "6px",
              }}
            ></img>
          </Link>
          <Link
            className="logo-social"
            href="https://wa.me/573128732917?text=Hola,%20quisiera%20saber"
            target={"_blank"}
          >
            <img
              src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_36/v1648572817/induimages/whatsapp_envdq7.png"
              alt="Imagen 1"
              style={{
                marginRight: "6px",
              }}
            ></img>
            {/* <WhatsApp style={{ color: "green" }} fontSize="large"></WhatsApp> */}
          </Link>
        </div>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          activeClassName="active"
          className="nav-item nav-link logo-animate"
          exact
          to="/inicio"
        >
          <img
            src="https://res.cloudinary.com/canaclc/image/upload/v1648151805/induimages/logo_hyttcw.png"
            alt="Imagen 1"
          ></img>
        </NavLink>

        <Buscador></Buscador>
      </div>
    </>
  );
};
