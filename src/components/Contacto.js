import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export const Contacto = () => {
  const [show, setShow] = useState(true);

  const showHide = () => {
    setShow(!show);
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        marginTop={10}
        color="#D35400"
      >
        Formulario de contacto
      </Typography>
      <div style={{ display: "center" }}>
        <Grid marginBottom={10} bgcolor="#D98430">
          <Card
            style={{
              maxWidth: 450,
              padding: "20px 5px",
              margin: "0 auto",
              color: "#D35400",
            }}
          >
            {show ? (
              <CardContent className="animate__animated animate__flipInX">
                <Typography gutterBottom variant="h5" align="center">
                  Envianos tu mensaje
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                ></Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Escribe tu nomre"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Escribe tu apellido"
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Escribe tu email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Escribe tu numero de telefonor"
                        label="Telefono"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Escribe tu mensaje"
                        multiline
                        rows={4}
                        placeholder="Escribe tu mensaje"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        size="small"
                        variant="contained"
                        style={{ backgroundColor: "#D98430" }}
                        fullWidth
                        onClick={showHide}
                      >
                        Enviar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            ) : (
              <Typography
                className="animate__animated animate__lightSpeedInRight"
                fontSize={18}
                fontWeight="bold"
                color="#D35400"
                align="center"
                component="p"
                gutterBottom
              >
                Gracias por contactarnos, te responderemos en la mayor brevedad
                posible
              </Typography>
            )}
          </Card>
        </Grid>
      </div>
    </>
  );
};
