import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainView from "./Views/MainView";
import SectionDetails from "./Views/SectionDetails";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/home" to="/" />
      <Route path="/" exact component={MainView} />
      <Route path="/section-details/:id" component={SectionDetails} />
    </Switch>
  </BrowserRouter>
);
export default App;
