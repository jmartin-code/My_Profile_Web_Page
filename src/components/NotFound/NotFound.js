// import React from "react";
// import { Typography } from "@material-ui/core";
// import useStyles from "./styles";
import classes from "./NotFound.module.css";

const NotFound = () => {
  // const classes = useStyles();
  return (
    <div className={classes.NotFound}>
      {/* <Typography variant="h4"> */}
      Please press the HOME button to return to the home page.
      <br />
      Invalid URL path. {/* </Typography> */}
    </div>
  );
};

export default NotFound;
