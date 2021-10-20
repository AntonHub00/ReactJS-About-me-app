import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainView from "./Views/MainView";

const App = () => (
  <BrowserRouter>
    <Route path="/" exact render={MainView} />
  </BrowserRouter>
);
export default App;
