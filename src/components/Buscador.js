import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { TextField, InputAdornment, Drawer, Button } from "@mui/material/";
import { Search } from "@mui/icons-material";
import { Tarjetas } from "./Tarjetas";

export const Buscador = () => {
  const { data: images } = useFetchGifs();
  const [cajaInput, setCajaInput] = useState(String);
  //Detecta si hay valores en el input de busqueda para habilitar icono de busqueda
  const isDisabled = () => {
    if (cajaInput === "") return true;
    else return false;
  };
  const manejarCaja = (e) => {
    setCajaInput(e.target.value);
  };
  //Manda a llamar Productos para filtrar por categoria-nombre
  const mostrar = () => {
    let val = "";
    val = images.find((data) => data.name.includes(cajaInput.toLowerCase()));
    if (val !== undefined) {
      return images
        .filter((data) => data.name.includes(cajaInput.toLowerCase()))
        .map((data) => <Tarjetas key={data.id} {...data} />);
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>no existen productos con el nombre "{cajaInput}"</h1>
        </div>
      );
    }
  };

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift" || event.code === "Enter")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //Se llama la funcion mostrar del Componente Productos
  const list = (anchor) => (
    <>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, true)}
        display="flex"
        flexWrap="wrap"
        alignContent="stretch"
      >
        {mostrar()}
        {/* {images.find((data)=>data.name ===cajaInput)} */}
      </Box>
      <Button onClick={toggleDrawer(anchor, false)}>salir</Button>
    </>
  );
  return (
    <>
      <TextField
        value={cajaInput}
        onChange={manejarCaja}
        label="Buscar Productos"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    disabled={isDisabled()}
                  >
                    <Search />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
