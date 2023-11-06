import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
