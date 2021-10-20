import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MainView from "./Views/MainView";

const App = () => (
  <BrowserRouter>
    <Route path="/home" render={MainView} />
    <Route path="/" exact render={() => <Redirect to="/home" />} />
  </BrowserRouter>
);
export default App;
