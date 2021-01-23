import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "100px auto",
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 300,
    background: "#D1D0CE",
  },
  img: {
    padding: "10px",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
