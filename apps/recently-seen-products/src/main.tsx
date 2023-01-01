import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const target = document.createElement("div");
target.id = "@moico/recently-seen-products";
const parent = document.querySelector(".xans-product.xans-product-additional");
parent?.appendChild(target);

ReactDOM.createRoot(target).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
