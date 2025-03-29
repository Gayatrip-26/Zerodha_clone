import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

//simple rout
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />  {/* *is neccesary Defines a wildcard route (* matches any subpath). */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
