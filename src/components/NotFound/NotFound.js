import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.NotFound}>
      Please press the HOME button to return to the home page.
      <br />
      Invalid URL path.
    </div>
  );
};

export default NotFound;
