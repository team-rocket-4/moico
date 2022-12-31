import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(
  document.querySelector(
    ".xans-product.xans-product-additional",
  ) as HTMLElement,
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
