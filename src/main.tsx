import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import Fonts from "./styles/Fonts";
import GlobalStyles from "./styles/GlobalStyles";
import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Fonts />
      <UserProvider>
        <ToastContainer autoClose={2000} />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
