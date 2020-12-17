import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  navbarDisplayFlex: {
    display: "flex",
  },
  navDisplayFlex: {
    display: "flex",
    marginLeft: "auto",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black"
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {Routes.map((route, index) => (
              route.title !== "NotFound" && route.title !== "Projects" ?
              (<ListItem button key={index} component={Link} to={route.path}>
                <ListItemText primary={route.title} />
              </ListItem>) : null
              
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
