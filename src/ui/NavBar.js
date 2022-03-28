import React, { useContext } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AddCartContext } from "../components/AddCartContext";
export const NavBar = () => {
  const { addCart } = useContext(AddCartContext);
  return (
    <div className="animate__animated animate__fadeIn">
      <AppBar position="relative">
        <Toolbar
          variant="dense"
          style={{ justifyContent: "space-around", backgroundColor: "#D98430" }}
        >
          <nav>
            <Button variant="primary">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/inicio"
              >
                Inicio
              </NavLink>
            </Button>
            <Button variant="primary">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/productos"
              >
                Productos
              </NavLink>
            </Button>
            {/* <Button variant="primary">
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/promos"
            >
              Promos
            </NavLink>
          </Button> */}

            <Button variant="primary">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/acercade"
              >
                Acerca de nosotros
              </NavLink>
            </Button>
            <Button variant="primary">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/contacto"
              >
                Contacto
              </NavLink>
            </Button>
            <Button variant="primary">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/carrito"
              >
                Carrito&nbsp;
              </NavLink>

              {addCart.length > 0 && (
                <span
                  style={{
                    border: "ridge white",
                    borderRadius: "2em",
                    background: "burlywood",
                    fontSize: "15px",
                  }}
                >
                  {addCart.length}
                </span>
              )}
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};
