import React from "react";
import Resume from "../Resume/Resume.pdf";
// import theme from "./Theme";
// import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import profileImg from "./image;
// import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import ProfileImg from "../Images/ProfileImg.jpg";

const useStyles = makeStyles((theme) => ({
  HomePage: {
    position: "relative",
    margin: "0 auto 100px auto",
    width: "60%"
  },
  navDisplayFlex: {
    display: "flex",
    marginLeft: "auto"
  },
  profileinfo: {
    textDecoration: "none",
    color: "black",
    background: "#D1D0CE",
    borderRadius: "10px",
    textAlign: "justify",
    textAlignLast: "center",
    padding: "50px 100px 50px",
    boxShadow: "0 2px 5px"
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
        <Typography variant="h1"> Jonathan M. Martinez </Typography>
        <Typography variant="h4">
          Electrical Engineer & Software Developer{" "}
        </Typography>
        <br />
        <Typography variant="h5">
          Hi, welcome to my profile webpage. I am a software developer with 
          an electrical engineer background. I am passioned about technology and devote most of my free
          time to develop websites or learn new programming skills. I would like to obtain an 
          opportunity as a Software Developer with a great company
          that promotes team work, personal and professional growth. If you would like
          to know more about my professional expirience and technical skills,
          please take a look at my{" "}
          <Link
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            Resume
          </Link>
          {" "} or please go to my {" "}
          <Link
            href="https://www.linkedin.com/in/jonathan-m-martinez"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            LinkedIn
          </Link>
          {" "} profile. I also have a{" "}
          <Link
            href="https://github.com/jmartin-code"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            color="inherit"
          >
            GitHub
          </Link>
          {" "} account in case you would like to collaborate. 
          Please send me an {" "}
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
          {" "} to get in touch
        </Typography>
      </div>
    </div>
  );
};

export default Home;
