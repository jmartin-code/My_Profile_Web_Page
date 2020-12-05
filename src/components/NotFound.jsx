import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  NotFoundInfo: {
    padding: "50px 50px",
    textAlign: "center",
    // alignItems: "center",
    margin: "40px auto",
    color: "red",
    background: "#D1D0CE",
    borderRadius: "10px",
    boxShadow: "0 2px 5px"
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.NotFoundInfo}>
      <Typography variant="h6">
      Invalid URL. <br/> 
      Please press the HOME button to return to the home page.
      </Typography>
    </div>
  );
};

export default NotFound;