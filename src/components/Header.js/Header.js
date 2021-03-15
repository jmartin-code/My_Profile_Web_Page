import React, { useState } from "react";
import { Paper, Tabs, Tab, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.header}>
      <Tabs className={classes.tabs} value={value} TabIndicatorProps={{ style: { background: "#00b7ff" } }} onChange={handleChange}>
        <Tab
          label={
            <Typography className={classes.tabLabel} variant="body1">
              Home
            </Typography>
          }
          component={Link}
          to={"/"}
        />
        {/* <Tab
          label={
            <Typography className={classes.tabLabel} variant="body1">
              Projects
            </Typography>
          }
          component={Link}
          to={"/projects"}
        /> */}
      </Tabs>
    </Paper>
  );
}
