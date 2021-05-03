import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div className={classes.content}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to website
        </Button>
      </CardActions>
    </div>
  );
};

export default CardContainer;
