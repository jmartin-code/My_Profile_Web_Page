import React from "react";
import { Typography } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.NotFoundInfo}>
      <Typography variant="h6">
        Invalid URL. <br />
        Please press the HOME button to return to the home page.
      </Typography>
    </div>
  );
};

export default NotFound;
