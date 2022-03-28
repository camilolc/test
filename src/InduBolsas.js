import React, { useState } from "react";
import { AddCartContext } from "./components/AddCartContext";

import "./index.css";
import { MainRouter } from "./routers/MainRouter";
function InduBolsas() {
  const [addCart, setAddCart] = useState([]);
  
  
  return (
    <AddCartContext.Provider
      value={{
        addCart,
        setAddCart,
      }}
    >
      <MainRouter></MainRouter>
    </AddCartContext.Provider>
  );

  // <GifGrid></GifGrid>;
}

export default InduBolsas;
