import React from "react";
import { DashboardRoutes } from "./DashBoardRoutes";
import { Header } from "../components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const MainRouter = () => {
  return (
    <>
      <Router>
        <Header></Header>

        <div>
          <Switch>
            <Route path="/" component={DashboardRoutes} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
