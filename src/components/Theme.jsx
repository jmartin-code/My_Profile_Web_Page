// import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
// import backgroundImg from "./backgroundTexture.png";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";
// import backgroundImg from "./backgroundTexture.png";
// import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D1D0CE"
    }
  },
  typography: {
    fontFamily: "Helvetica Neue",
    // useNextVariants: true
    h1: {
      fontSize: 50,
      fontWeight: 1000
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: "bold"
    }
  }
});

export default theme;

// overrides: {

//   secondary: {
//     // This is green.A700 as hex.
//     main: "#D1D0CE"
//   }
// },
// appBar: {
//   color: "#D1D0CE",
//   textColor: "#000000",
//   titleFontWeight: 800,
//   padding: 600
// },
// footer: {
//   display: "flex",
//   flexDirection: "column",
//   minHeight: "500vh"
// padding: theme.spacing(3, 2),
// marginTop: "auto",
// backgroundColor:
//   theme.palette.type === "light"
//     ? theme.palette.grey[200]
//     : theme.palette.grey[800]

// import baseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
// import { fade } from "material-ui/utils/colorManipulator";
