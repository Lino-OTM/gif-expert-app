import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "./style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

// Sin el modo estricto, React lanzara las peticiones HTTP una sola vez debido al uso del useState, pero al activarlo nuevamente lo lanzara 2 veces porque es la forma en la que React se asegura que nuestro componente este funcionando correctamente. (NO AFECTA PRODUCCION)