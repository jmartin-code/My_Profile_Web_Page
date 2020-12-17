import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../Images/backgroundTexture.png";
import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";
import theme from "./Theme";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundColor: "#33bbff"
    }
  }
}));

const App = () => {
  useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Container maxWidth="md"> */}
        <Switch>
          {Routes.map((route, index) => (
            <Route exact path={route.path} key={index}>
              <route.component />
            </Route>
          ))}
        </Switch>
        {/* </Container> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
