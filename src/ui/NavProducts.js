import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Tarjetas } from "../components/Tarjetas";

import "../index.css";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const NavProductos = () => {
  const { data: images } = useFetchGifs();
  const [cat, setCat] = useState("");

  const manejadorCat = () => {
    switch (cat) {
      case "Todo":
        return images.map((data) => <Tarjetas key={data.id} {...data} />);
      case "bolsas":
        return images
          .filter((data) => data.category === "bolsas")
          .map((data) => <Tarjetas key={data.id} {...data} />);

      case "papel":
        return images
          .filter((data) => data.category === "papel")
          .map((data) => <Tarjetas key={data.id} {...data} />);
      case "vasos":
        return images
          .filter((data) => data.category === "vasos")
          .map((data) => <Tarjetas key={data.id} {...data} />);

      default:
        return images.map((data) => <Tarjetas key={data.id} {...data} />);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <AppBar position="relative" style={{ marginTop: "20px" }}>
        <Toolbar
          className="animate__animated animate__fadeIn"
          variant="dense"
          style={{ justifyContent: "space-around", backgroundColor: "#D35400" }}
        >
          <nav display="flex" flex="1" justify-content="space-around">
            <IconButton
              sx={{ flexDirection: "column", borderRadius: "0px" }}
              onClick={() => setCat("Todo")}
            >
              <img
                src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_58/v1648602791/induimages/tienda_qdqnhd.png"
                alt="Productos"
              />

              <Typography
                gutterBottom
                variant="body3"
                component="div"
                color="white"
              >
                Productos
              </Typography>
            </IconButton>

            <IconButton
              sx={{ flexDirection: "column", borderRadius: "0px" }}
              onClick={() => setCat("bolsas")}
            >
              <img
                src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_58/v1648602509/induimages/bolsa-de-papel_pgguqp.png"
                alt="Bolsas"
              />

              <Typography
                gutterBottom
                variant="body3"
                component="div"
                color="white"
              >
                Bolsas
              </Typography>
            </IconButton>

            <IconButton
              sx={{ flexDirection: "column", borderRadius: "0px" }}
              onClick={() => setCat("papel")}
            >
              <img
                src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_58/v1648602283/induimages/papel-de-aluminio_exs9so.png"
                alt="Papel"
              />
              <Typography
                gutterBottom
                variant="body3"
                component="div"
                color="white"
              >
                Papel
              </Typography>
            </IconButton>
            <IconButton
              sx={{ flexDirection: "column", borderRadius: "0px" }}
              onClick={() => setCat("vasos")}
            >
              <img
                src="https://res.cloudinary.com/canaclc/image/upload/c_scale,w_58/v1648602617/induimages/vaso-de-plastico_c09bev.png"
                alt="Vasos"
              />
              <Typography
                gutterBottom
                variant="body3"
                component="div"
                color="white"
              >
                Vasos
              </Typography>
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
      <div className="card2">{manejadorCat()}</div>
    </div>
  );
};
