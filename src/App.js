import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

const HomePage = React.lazy(() => import("./components/Pages/HomePage"));
const ProjectsPage = React.lazy(() => import("./components/Pages/ProjectsPage"));
const NotFound = React.lazy(() => import("./components/Pages/NotFoundPage"));

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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
