import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";
import axios from "axios";

axios.defaults.baseURL = "https://the-blogger-backend.herokuapp.com/api"
axios.defaults.headers.common["Access-Control-Allow-Origin"]="*";
axios.defaults.headers.common["origin"]="*";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
