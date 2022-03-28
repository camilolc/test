import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../components/Home";
import { TarjetaPantalla } from "../components/TarjetaPantalla";
import { Carrito } from "../components/Carrito";
import { NavBar } from "../ui/NavBar";
import { NavProductos } from "../ui/NavProducts";
import Footer from "../components/Footer";
import { AcercaDe } from "../components/AcercaDe";
import { Contacto } from "../components/Contacto";
export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/productos" component={NavProductos} />
          <Route
            exact
            path="/producto/:productoId"
            component={TarjetaPantalla}
          />
          <Route exact path="/acercade" component={AcercaDe} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/contacto" component={Contacto} />
          {/* <Route exact path="/promos" component={Promociones} /> */}

          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer></Footer>
    </>
  );
};
