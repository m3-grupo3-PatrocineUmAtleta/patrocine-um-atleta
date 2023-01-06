import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Providers } from "./providers";
import Fonts from "./styles/Fonts";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Fonts />
      <Providers>
        <ToastContainer autoClose={2000} />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
