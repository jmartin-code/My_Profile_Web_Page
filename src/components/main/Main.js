import React from "react";
import { Link, Typography, Container, Zoom } from "@material-ui/core";
import ProfileImg from "../Images/ProfileImg.jpg";
import Resume from "../Resume/Resume.pdf";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Zoom timeout={1000} in>
        <div className={classes.HomePage}>
          <div className={classes.profileImage}>
            <img src={ProfileImg} draggable="false" alt="Jonathan Profile" />
          </div>
          <div className={classes.profileinfo}>
            <div className={classes.profilename}>
              <h1> Ian Alexaxnder Martinez </h1>
              <h3>Software Developer - Electrical Engineer</h3>
            </div>
            <hr />
            <div>
              <Typography variant="h5">
                I am an engineer who is passionate about technology. I devote my
                free time to keep up-to-date with technology trends and learning
                new tech skills in areas such as software development, cloud
                computing and security.
                <br />
                <br />
                I am always on the lookout for new opportunities with a great
                company that promotes teamwork, personal and professional
                growth.
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
      </Zoom>
    </Container>
  );
};

export default Main;
