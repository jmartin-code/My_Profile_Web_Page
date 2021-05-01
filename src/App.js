import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// import { Container, ThemeProvider } from "@material-ui/core";

import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
const Home = React.lazy(() => import("./components/Pages/Home"));
// // import Header from "./components/Header.js/Header";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
// import Projects from "./components/Projects/Projects";
// import NotFound from "./components/NotFoundPage/NotFound";
// import theme from "./components/Theme/Theme";

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <Loading />
          </div>
        }
      >
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects"></Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
