import { Grid, Container, Zoom } from "@material-ui/core";
import CardContainer from "../Card/CardContainer";
import AwesomeQuotesImg from "../Images/AwesomeQuotes.PNG";
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
    <Container className={classes.container}>
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
    </Container>
  );
};

export default Projects;
