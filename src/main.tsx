import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Providers } from "./providers";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyles />
        <ToastContainer />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
