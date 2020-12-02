import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Header from "./components/Header";

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { ThemeProvider } from "@material-ui/styles";
// import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom"; //import browser router

// import backgroundImg from "./components/backgroundTexture.png";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({

// Use the browserRouter to wrap the App
ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
