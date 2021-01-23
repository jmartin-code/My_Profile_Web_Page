import React from "react";
import { Link, Typography, Container } from "@material-ui/core";
import ProfileImg from "../../../src/Images/ProfileImg.jpg";
import Resume from "../../../src/Resume/Resume.pdf";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.HomePage}>
        <div className={classes.profileImage}>
          <img
            src={ProfileImg}
            height="245"
            width="205"
            draggable="false"
            alt="Jonathan Profile"
          />
        </div>
        <div className={classes.profileinfo}>
          <div className={classes.profilename}>
            <Typography variant="h1"> Jonathan M. Martinez </Typography>
            <Typography variant="h4">
              Electrical Engineer - Software Developer{" "}
            </Typography>
          </div>
          <hr />
          <div>
            <Typography variant="h5">
              I am a software developer with an electrical engineer background
              who is passionate about technology. I devote my free time to
              learning new tech skills.
              <br />
              <br />
              I am always on the lookout for new opportunities as a Software
              Developer with a great company that promotes teamwork, personal
              and professional growth.
              <br />
              <br />
              If you would like to know more about my professional experience
              and technical skills, please look at my{" "}
              <Link
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                color="inherit"
              >
                Resume
              </Link>{" "}
              or{" "}
              <Link
                href="https://www.linkedin.com/in/jonathan-m-martinez"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                color="inherit"
              >
                LinkedIn
              </Link>{" "}
              profile.{""}
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
              </Link>{" "}
              repo in case you would like to collaborate or send me an{" "}
              <Link
                // component="a"
                href={`mailto:${"jmmartinez331@gmail.com"}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                color="inherit"
              >
                Email
              </Link>{" "}
              to get in touch.
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
