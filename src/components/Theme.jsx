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
      // fontStyle: "italic",
      fontWeight: 800
      
    },
    
    h4: {
      fontSize: 26,
      textAlign: "center",
      // fontStyle: "oblique"
    },
    
    h5: {
      fontSize: 24,
      lineHeight: 1.2
      // textAlign: "center"
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