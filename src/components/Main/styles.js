import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  HomePage: {
    margin: "auto",
    paddingBottom: "5rem",
    width: "75%",
    ["@media (max-width:780px)"]: {
      width: "100%",
    },
  },
  navDisplayFlex: {
    display: "flex",
    marginLeft: "auto",
  },
  profileinfo: {
    color: "black",
    background: "#fafafa",
    borderRadius: "10px",
    padding: "50px 50px 20px 50px",
    boxShadow: "0 2px 5px",
  },
  profileImage: {
    position: "relative",
    textAlign: "center",
    width: 250,
    height: 250,
    borderRadius: 250,
    overflow: "hidden",
    boxShadow: "0 2px 15px",
    border: "5px solid #fafafa",
    margin: "20px auto -50px auto",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    oUserSelect: "none",
    userSelect: "none",
  },
  profilename: {
    textAlign: "center",
  },
}));
