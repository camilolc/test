import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import "../index.css";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { AddCartContext } from "./AddCartContext";
export const TarjetaPantalla = () => {
  const { addCart, setAddCart } = useContext(AddCartContext);

  const { productoId } = useParams();

  const { data: images } = useFetchGifs();

  const getID = (id) => {
    const info = images.find((data) => data.id === id);
    return info;
  };
  const ame = getID(productoId);
  const addToCart = () => {
    setAddCart([
      ...addCart,
      {
        name: ame.name,
        url: ame.url,
        // price: ame.price,
        size: ame.size,
      },
    ]);
  };
  const ref = () => {
    let d = [];
    if (ame !== undefined) {
      const { size } = ame;

      d = size.map(({ referencia, Precio }) => [referencia, Precio]);
    }
    return d;
  };

  const formatoMoneda = (valor) => {
    return parseInt(valor).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "300px", justifyContent: "space-between" }}>
        <CardMedia
          component="img"
          height="350"
          image={!ame ? "Cargando" : ame.url}
          alt="Producto"
        />
        <CardContent>
          <Typography gutterBottom variant="caption" component="div">
            {!ame ? "Cargando" : ame.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {!ame ? "Cargando" : ame.name}
          </Typography>
          <Typography variant="h5" color="blue">
            {!ame ? "Cargando" : formatoMoneda(ame.size[0].Precio)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#D98430" }}
            onClick={addToCart}
          >
            Agregar
          </Button>
        </CardActions>
      </Card>

      {ref().map((data, index) => (
        <h1
          key={index}
          style={{
            border: "2px solid black",
            width: "fit-content",
          }}
        >
          Medida: {data[0]}, Precio: {formatoMoneda(data[1])}
        </h1>
      ))}
    </div>
  );
};
