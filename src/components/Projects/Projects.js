// import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
// import useStyles from "./styles.js";

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.mainGrid} alignItems="center" spacing={5} justify="center">
//       <Grid item md>
//         <Card className={classes.card}>
//           <CardActionArea>
//             <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Lizard
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Link
//             </Button>
//             <Button size="small" color="primary">
//               GitHub
//             </Button>
//           </CardActions>
//         </Card>
//       </Grid>

//       <Grid item md>
//         <Card className={classes.card}>
//           <CardActionArea>
//             <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Lizard
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Link
//             </Button>
//             <Button size="small" color="primary">
//               GitHub
//             </Button>
//           </CardActions>
//         </Card>
//       </Grid>

//       <Grid item md>
//         <Card className={classes.card}>
//           <CardActionArea>
//             <CardMedia component="img" alt="testing" height="200" image="" title="Contemplative Reptile" />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Lizard
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Link
//             </Button>
//             <Button size="small" color="primary">
//               GitHub
//             </Button>
//           </CardActions>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

import { Grid, Zoom } from "@material-ui/core";
import CardContainer from "../Card/CardContainer";
import AwesomeQuotesImg from "../Images/AwesomeQuotes.PNG";
import ProfileImg from "../Images/ProfileImg.jpg";
import MomentsImg from "../Images/Moments.PNG";
import MgmToolImg from "../Images/ManagementTool.PNG";

import classes from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: "p1",
      name: "Amazing Quotes",
      title: "Amazing Quotes webpage",
      image: AwesomeQuotesImg,
      description:
        "This an amazing web page where you can add or read inspirational quotes.",
      link: "https://amazingquotes.netlify.app/",
    },
    {
      id: "p2",
      name: "Moments",
      title: "Moments webpage",
      image: MomentsImg,
      description: "This a very nice web page to add your favorite memories",
      link: "https://moments-portfolio.netlify.app/",
    },
    {
      id: "p3",
      name: "Project Management Tool",
      title: "Project Management webpage",
      image: MgmToolImg,
      description: "This web app is really useful to keep track of of projects",
      link: "https://mgm-tool.herokuapp.com/",
    },
  ];

  return (
    <Zoom timeout={1000} in>
      <div className={classes.grid}>
        <Grid container spacing={5}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={4}>
              <CardContainer
                name={project.name}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Zoom>
  );
};

export default Projects;
