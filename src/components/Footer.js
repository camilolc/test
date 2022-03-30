import { Container, Grid, Box, Typography, Link } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="animate__animated animate__fadeIn">
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 7 }}
        bgcolor="#D98430"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} textAlign="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <Box borderBottom={1}>
                Indubolsas popayán - Los mejores precios
              </Box>
              <img
                src="https://res.cloudinary.com/canaclc/image/upload/c_scale,h_148/v1648585692/induimages/icono_cagsqo.png"
                alt=""
              ></img>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} marginBottom={4}>
                Información de contacto
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="body3"
                  component="div"
                  color="white"
                >
                  <p>
                    Direccion: Calle 6A # 18-36 Local 1 Barrio la esmeralda,
                    Popayán, Cauca, Colombia <br></br>
                    Celular: +57 3177777676 Email:Contacto@indubolsaspopayan.co
                  </p>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Redes</Box>
              <Box>
                <Link
                  href="https://www.facebook.com/indubolsaspopayan"
                  target={"_blank"}
                  color="inherit"
                >
                  <Facebook fontSize="large"></Facebook>
                </Link>
                <Link
                  href="https://www.instagram.com/indubolsaspopayan/"
                  target={"_blank"}
                  color="inherit"
                >
                  <Instagram fontSize="large"></Instagram>
                </Link>
                <Link
                  href="https://wa.me/573128732917?text=Hola,%20quisiera%20saber"
                  target={"_blank"}
                  color="inherit"
                >
                  <WhatsApp fontSize="large"></WhatsApp>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            INDUBOLSAS POPAYÁN &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
