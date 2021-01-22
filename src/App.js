import React from "react";
import { Switch, Route } from "react-router-dom";
import useStyles from "./styles";
import { Container, AppBar, Typography } from "@material-ui/core";

import Routes from "./components/Routes";
import Header from "./components/Header.js/Header";
import Footer from "./components/Footer";
// import theme from "./components/Theme";

const App = () => {
  const classes = useStyles();

  return (
    <Container>
      <Header />
      <Switch>
        {Routes.map((route, index) => (
          <Route exact path={route.path} key={index}>
            <route.component />
          </Route>
        ))}
      </Switch>
      <Footer />
    </Container>
  );
};

export default App;
