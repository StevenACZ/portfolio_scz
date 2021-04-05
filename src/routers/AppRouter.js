import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainScreen from '../components/pages/MainScreen';
import Header from '../components/layout/Header';
import AboutScreen from '../components/pages/AboutScreen';
import SkillsScreen from '../components/pages/SkillsScreen';
import ProjectsScreen from '../components/pages/ProjectsScreen';
import ContactScreen from '../components/pages/ContactScreen';

const AppRouter = () => {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />

        <Switch>
          {/* <Route exact path="/projects/:projectId" component={ HeroScreen } /> */}
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/skills" component={SkillsScreen} />
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/contact" component={ContactScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
