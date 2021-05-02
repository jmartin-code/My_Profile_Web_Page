// import ProfileImg from "../Images/ProfileImg.jpg";

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
    <div className={classes.card}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
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
            name="myLinkedIn"
            value="LinkedIn"
            title="My LinkedIn"
          >
            Link to website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardContainer;
