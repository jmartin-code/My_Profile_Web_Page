import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; //import browser router
// import CssBaseline from "@material-ui/core/CssBaseline";

// Use the browserRouter to wrap the App
ReactDOM.render(
  // <Provider>
  // <CssBaseline />
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);
