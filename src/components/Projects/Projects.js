import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProfileImg from "../../../src/Images/ProfileImg.jpg";
import useStyles from "./styles";

const Projects = () => {
  // const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  return (
    <Grid container className={classes.root}>
      <Typography variant="h5" align="center">
        WORK IN PROGRESS
      </Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          {/* {[0, 1, 2].map((value) => ( */}
          <Grid item>
            <Paper className={classes.paper}>
              <Grid item align="center">
                <img
                  height="200"
                  width="200"
                  draggable="false"
                  className={classes.img}
                  alt=""
                  src={ProfileImg}
                />
              </Grid>
              <Grid item align="center">
                <Typography gutterBottom variant="subtitle1">
                  In Progress
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid item align="center">
                <img
                  height="100"
                  width="100"
                  draggable="false"
                  className={classes.img}
                  alt=""
                  src={ProfileImg}
                />
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid item align="center">
                <img
                  height="100"
                  width="100"
                  draggable="false"
                  className={classes.img}
                  alt=""
                  src={ProfileImg}
                />
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          {/* ))} */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
