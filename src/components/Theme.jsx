import { createMuiTheme } from "@material-ui/core/styles";

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