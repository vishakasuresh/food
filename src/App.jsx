import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route component={Home}/>
      </Switch>
    </>
  );
}

export default App;
