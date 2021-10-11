import React from "react";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Card from "../components/Card";

const MainView = () => (
  <div className="md:container m-auto">
    <NavBar />
    <Section />
    <Card />
  </div>
);

export default MainView;
