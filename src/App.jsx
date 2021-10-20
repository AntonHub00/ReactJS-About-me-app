import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MainView from "./Views/MainView";
import SectionDetails from "./Views/SectionDetails";

const App = () => (
  <BrowserRouter>
    <Route path="/home" render={MainView} />
    <Route path="/" exact render={() => <Redirect to="/home" />} />
    <Route path="/section-details/:id" render={SectionDetails} />
  </BrowserRouter>
);
export default App;
