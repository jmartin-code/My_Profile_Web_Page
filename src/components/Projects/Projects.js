import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainGrid} alignItems="center" spacing={5} justify="center">
      <Grid item md>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Link
            </Button>
            <Button size="small" color="primary">
              GitHub
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item md>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Link
            </Button>
            <Button size="small" color="primary">
              GitHub
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item md>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Link
            </Button>
            <Button size="small" color="primary">
              GitHub
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
