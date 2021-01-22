import React from "react";
import { Link } from "react-router-dom";
import Routes from "../Routes";
import useStyles from "./styles";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.navBar}>
      <AppBar position="static">
        <Toolbar>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {Routes.map((route, index) =>
              route.title !== "NotFound" && route.title !== "Projects" ? (
                <ListItem button key={index} component={Link} to={route.path}>
                  <ListItemText primary={route.title} />
                </ListItem>
              ) : null
            )}
          </List>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
