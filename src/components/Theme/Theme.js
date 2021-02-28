import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Helvetica Neue",
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
  },
});

export default theme;
