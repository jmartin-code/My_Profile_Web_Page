import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D1D0CE"
    }
  },
  typography: {
    fontFamily: "Helvetica Neue",
    useNextVariants: true,
    h1: {
      fontSize: 50,
      textAlign: "center",
      fontWeight: "bold"
    },
    
    h4: {
      fontSize: 34,
      textAlign: "center"
    },
    
    h5: {
      fontSize: 24,
      lineHeight: 2,
      textAlign: "justify"
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