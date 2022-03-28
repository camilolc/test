import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import "../index.css";
import { AddCartContext } from "./AddCartContext";
import "../index.css";
export const Carrito = (data) => {
  const { addCart, setAddCart } = useContext(AddCartContext);
  console.log(addCart);
  let salida = "";
  let contador = 0;
  const formater = () => {
    // Object.values(actualizarArray);
    for (let i in addCart) {
      contador = contador + 1;
      salida +=
        "| " +
        "Producto:" +
        contador +
        "=" +
        addCart[i]?.name +
        " Precio:$" +
        addCart[i]?.size[0].Precio +
        " |";
    }

    return salida;
  };
  const deleteItem = (index) => {
    console.log("asdf", index);
    const nuevoArreglo = addCart.filter((item, index2) => index2 !== index);
    setAddCart(nuevoArreglo);
  };

  const formatoMoneda = (valor) => {
    return parseInt(valor).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };
  const total = () => {
    let precio = 0;
    precio = addCart.map((data) => data.size[0].Precio);

    return precio.reduce((a, b) => a + b, 0);
  };

  let link = `https://wa.me/573128732917?text=Hola,%20Quisiera%20comprar.%0A%20${formater()}%0A%20${
    "Total:" + formatoMoneda(total()) + " |"
  }`;
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        {addCart.length > 0 && (
          <>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Button
                size="large"
                variant="contained"
                style={{
                  backgroundColor: "#D35400",
                }}
                href={link}
                target="_blank"
              >
                Comprar
              </Button>
            </div>
            <div className="card2">
              {addCart.map((data, index) => (
                <Card key={index} className="card-grid">
                  <CardMedia
                    component="img"
                    height="190"
                    image={data.url}
                    alt="Producto"
                  />
                  <CardContent>
                    {data.size.map((info, index2) => (
                      <Typography
                        key={index2}
                        gutterBottom
                        variant="caption"
                        component="div"
                      >
                        Medida: {info.referencia}, Precio:{" "}
                        {formatoMoneda(info.Precio)}
                      </Typography>
                    ))}

                    <Typography gutterBottom variant="h6" component="div">
                      {data.name} {data.size[0].referencia}
                    </Typography>
                    <Typography variant="h5" color="blue">
                      {formatoMoneda(data.size[0].Precio)}
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
                      onClick={() => deleteItem(index)}
                    >
                      Eliminar
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
            <h1 style={{ textAlign: "center" }}>
              TOTAL: {formatoMoneda(total())}
            </h1>
          </>
        )}
      </div>

      {addCart.length === 0 && (
        <h1
          className="animate__animated animate__fadeIn"
          style={{
            marginTop: "10%",
            textAlign: "center",
            marginBottom: "10%",
          }}
        >
          No existen productos agregados al carrito
        </h1>
      )}
    </>
  );
};
