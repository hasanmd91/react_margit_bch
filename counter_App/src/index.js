import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./header";
import Footer from "./footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header text={"Counter App"} />
    <App />
    <Footer text={"Made by Hasan"} />
  </React.StrictMode>
);
