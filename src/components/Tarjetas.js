import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import { AddCartContext } from "./AddCartContext";
import "../index.css";
export const Tarjetas = (data) => {
  //Referencia
  const ref = () => {
    let d = [];
    if (data !== undefined) {
      const { size } = data;

      d = size.map(({ referencia, Precio }) => [referencia, Precio]);
    }
    return d;
  };

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const { addCart, setAddCart } = useContext(AddCartContext);

  const addToCart = () => {
    // const tabla2 = {};
    setAddCart(
      [
        ...addCart,
        {
          id: data.id,
          name: data.name,
          url: data.url,
          // price: data.price,
          size: data.size,
        },
      ]
      // .filter((data) =>
      //   tabla2[data.name] ? false : (tabla2[data.name] = true)
      // )
    );

    setState({ open: true, vertical: "top", horizontal: "center" });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const formatoMoneda = (valor) => {
    return parseInt(valor).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };
  return (
    <>
      <Card className="card-grid  animate__animated animate__bounceInRight ">
        <CardMedia
          component="img"
          height="190"
          image={data.url}
          alt="Producto"
        />
        <CardContent style={{ flexWrap: "wrap" }}>
          {ref().map((data, index) => (
            <Typography
              key={index}
              gutterBottom
              variant="caption"
              component="div"
            >
              Medida: {data[0]}, Precio: {formatoMoneda(data[1])}
            </Typography>
          ))}

          <Typography gutterBottom variant="h6" component="div">
            {data.name} {ref()[0][0]}
          </Typography>
          <Typography variant="h5" color="blue">
            {formatoMoneda(ref()[0][1])}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#D98430" }}
          >
            <Link
              to={`./producto/${data.id}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              ver Producto
            </Link>
          </Button>

          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#D98430", marginLeft: "0px" }}
            onClick={addToCart}
          >
            Agregar
          </Button>
        </CardActions>
      </Card>
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="¡Producto agregado con exito!"
          key={vertical + horizontal}
          autoHideDuration={500}
        />
      </div>
    </>
  );
};
