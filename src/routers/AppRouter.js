import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainScreen from "../components/pages/MainScreen";
import Header from "../components/layout/Header";

const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <Switch>
          {/* <Route exact path="/projects/:projectId" component={ HeroScreen } /> */}
          <Route exact path="/" component={ MainScreen } />
        </Switch>

      </div>
    </Router>
  )
}

export default AppRouter
