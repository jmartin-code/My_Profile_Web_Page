import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.NotFoundInfo}>
      <Typography variant="h4">
        Invalid URL path. <br />
        Please press the HOME button to return to the home page.
      </Typography>
    </div>
  );
};

export default NotFound;
