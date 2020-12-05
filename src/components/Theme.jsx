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
      fontSize: 35,
      textAlign: "center",
      // fontStyle: "italic",
      fontWeight: 800
      
    },
    
    h4: {
      fontSize: 24,
      textAlign: "center",
      // fontStyle: "oblique"
    },
    
    h5: {
      fontSize: 22,
      lineHeight: 1.2
    },
    h6: {
      fontSize: 22,
      lineHeight: 1.2
    },

    body1: {
      fontWeight: 500
    }
  }
});

export default theme;