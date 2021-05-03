import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact activeClassName={classes.active}>
              PROJECTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
