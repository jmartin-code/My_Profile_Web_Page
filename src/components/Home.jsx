import React from "react";
import { Link, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import ProfileImg from "../Images/ProfileImg.jpg";
import Resume from "../Resume/Resume.pdf";

const useStyles = makeStyles((theme) => ({
  HomePage: {
    position: "relative",
    margin: "40px auto 100px auto",
    width: "80em "
  },
  navDisplayFlex: {
    display: "flex",
    marginLeft: "auto"
  },
  profileinfo: {
    color: "black",
    background: "#D1D0CE",
    borderRadius: "10px",
    // textAlign: "justify",
    // textAlignLast: "center",
    padding: "50px 60px",
    boxShadow: "0 2px 5px"
  },
  profilename: {
    // textAlign: "center"
  },
  profileImage: {
    textAlign: "center",
    width: 250,
    height: 250,
    borderRadius: 200,
    overflow: "hidden",
    boxShadow: "0 2px 15px",
    border: "5px solid #D1D0CE",
    margin: "30px auto -50px auto"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.HomePage}>
      <div className={classes.profileImage}>
        <img src={ProfileImg} height="285" width="245" alt="Jonathan Profile" />
      </div>
      <div className={classes.profileinfo}>
        <div className={classes.profilename}>
          <Typography variant="h1"> Jonathan M. Martinez </Typography>
          <Typography variant="h4">
            Electrical Engineer - Software Developer{" "}
          </Typography>
        </div>
        <br />
        <Typography
         variant="h5">
          I am a software developer with an electrical engineer background who is passionate about technology.
          I devote my free time to learning new tech skills.
          <br />
          <br />
          I am always on the lookout fo new opportunities as a Software Developer with a great company
          that promotes teamwork, personal and professional growth. 
          <br />
          <br />
          If you would like to know more about my professional experience and technical skills,
          please look at my{" "}
          <Link
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            Resume
          </Link>
          {" "} or {" "}
          <Link
            href="https://www.linkedin.com/in/jonathan-m-martinez"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            LinkedIn
          </Link>
          {" "} profile.{""}
          <br />
          <br />
          Take a look at my{" "}
          <Link
            href="https://github.com/jmartin-code"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            GitHub
          </Link>
          {" "} repo in case you would like to collaborate or send me an {" "}
          <Link
            // component="a"
            href={`mailto:${"jmmartinez331@gmail.com"}`}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            Email
          </Link>
          {" "} to get in touch.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
