import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  ProjectsPage: {
    padding: "50px 50px",
    margin: "80px auto",
    color: "black",
    background: "#D1D0CE",
    borderRadius: "10px",
    boxShadow: "0 2px 5px"
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <Typography variant="h6">This page is under construction.</Typography>
      <Typography variant="h6">
        The info for this page will be available soon!
      </Typography>
    </div>
  );
};

export default Projects;
