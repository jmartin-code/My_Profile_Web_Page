import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <Card className={classes.cont}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.content}>
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
          name="myLinkedIn"
          value="LinkedIn"
          title="My LinkedIn"
        >
          Link to website
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardContainer;
