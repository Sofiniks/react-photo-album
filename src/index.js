import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import PhotoProvider from "./context";
import "./index.css";

ReactDOM.render(
  <PhotoProvider>
    <App />
  </PhotoProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
