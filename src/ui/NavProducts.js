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
              sx={{ flexDirection: "column" }}
              onClick={() => setCat("Todo")}
            >
              <img
                src="https://img.icons8.com/color/100/000000/grocery-store.png"
                alt="Todos los Productos"
              />

              <Typography
                gutterBottom
                variant="body3"
                component="div"
                color="white"
              >
                Todos los Productos
              </Typography>
            </IconButton>

            <IconButton
              sx={{ flexDirection: "column" }}
              onClick={() => setCat("bolsas")}
            >
              <img
                src="https://img.icons8.com/color/100/000000/wallpaper-roll.png"
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
              sx={{ flexDirection: "column" }}
              onClick={() => setCat("papel")}
            >
              <img
                src="https://img.icons8.com/color/100/000000/sheet-of-paper.png"
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
              sx={{ flexDirection: "column" }}
              onClick={() => setCat("vasos")}
            >
              <img
                src="https://img.icons8.com/dusk/100/000000/solo-cup.png"
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
