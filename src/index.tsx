import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import BarChartControlProvider from "./context/BarChartControl";
import CovidDataProvider from "./context/CovidDataContext";
import LineChartControlProvider from "./context/LineChartControl";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CovidDataProvider>
        <LineChartControlProvider>
          <BarChartControlProvider>
            <App />
          </BarChartControlProvider>
        </LineChartControlProvider>
      </CovidDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
