import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import DescriptionIcon from "@material-ui/icons/Description";
import Resume from "../Resume/Resume.pdf";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <IconButton
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        name="myResume"
        value="resume"
        title="My Resume"
      >
        <DescriptionIcon />
      </IconButton>

      <IconButton
        href="https://www.linkedin.com/in/jonathan-m-martinez"
        target="_blank"
        rel="noopener noreferrer"
        name="myLinkedIn"
        value="LinkedIn"
        title="My LinkedIn"
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        href="https://github.com/jmartin-code"
        target="_blank"
        rel="noopener noreferrer"
        name="myGitHub"
        value="GitHub"
        title="My GitHub"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        href={`mailto:${"jmmartinez331@gmail.com"}`}
        target="_blank"
        rel="noopener noreferrer"
        name="myEmail"
        value="Email"
        title="My Email"
      >
        <EmailIcon />
      </IconButton>

      <div>
        {"Copyright © "} {new Date().getFullYear()} Jonathan Martinez. All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
