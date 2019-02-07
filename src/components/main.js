import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Youtube from "./Youtube"
import Trello from "./Trello"


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/youtube" component={Youtube} />
    <Route exact path="/trello" component={Trello} />

  </Switch>
);

export default Main;
