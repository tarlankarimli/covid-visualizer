import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ChartsControlProvider from "./context/ChartsControl";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChartsControlProvider>
        <App />
      </ChartsControlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
