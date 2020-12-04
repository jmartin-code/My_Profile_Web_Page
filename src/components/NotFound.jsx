import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  ProjectsPage: {
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px auto",
    width: "60%",
    color: "red",
    background: "#D1D0CE",
    borderRadius: "10px",
    boxShadow: "0 2px 5px"
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <Typography variant="h5">
      This url path is invalid. 
      Please press the HOME button to return to the home page.
      </Typography>
    </div>
  );
};

export default NotFound;