import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  ProjectsPage: {
    // position: "relative",
    margin: "80px auto",
    width: "80%",
    // textDecoration: "none",
    color: "black",
    background: "#D1D0CE",
    borderRadius: "10px",
    // textAlign: "center",
    // padding: "50px 50px 50px",
    boxShadow: "0 2px 5px"
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <Typography variant="h4">This page is under construction.</Typography>
      <Typography variant="h4">
        The info for this page will be available soon!
      </Typography>
    </div>
  );
};

export default Projects;
