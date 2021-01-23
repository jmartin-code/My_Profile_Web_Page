import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  HomePage: {
    margin: "0 auto 80px auto",
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
    background: "#D1D0CE",
    borderRadius: "10px",
    padding: "50px 50px 20px 50px",
    boxShadow: "0 2px 5px",
  },
  profileImage: {
    textAlign: "center",
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden",
    boxShadow: "0 2px 15px",
    border: "5px solid #D1D0CE",
    margin: "30px auto -50px auto",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    oUserSelect: "none",
    userSelect: "none",
  },
}));
