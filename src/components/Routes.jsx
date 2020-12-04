import Projects from "./Projects";
import Home from "./Home";
import NotFound from "./NotFound"

const Routes = [
  {
    path: "/",
    title: "Home",
    component: Home
  },
  {
    path: "/projects",
    title: "Projects",
    component: Projects
  },
  {
    path: "*",
    // title: "NotFound",
    component: NotFound
  }
];

export default Routes;
