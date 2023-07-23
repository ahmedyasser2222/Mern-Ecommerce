import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/style/config.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Utiles from "./utile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Utiles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Utiles>
  </Provider>
);
