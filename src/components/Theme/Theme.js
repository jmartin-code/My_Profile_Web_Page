import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#D1D0CE",
  //   },
  // },
  typography: {
    fontFamily: "Helvetica Neue",
    // useNextVariants: true,
    h1: {
      fontSize: 40,
      textAlign: "center",
      fontWeight: 800,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 25,
      textAlign: "center",
      lineHeight: 1.5,
    },

    h5: {
      fontSize: 22,
      lineHeight: 1.3,
    },
    // h6: {
    //   fontSize: 10,
    //   lineHeight: 1.2,
    //   textAlign: "center",
    // },

    // body1: {
    //   fontWeight: 500,
    // },
  },
});

export default theme;
