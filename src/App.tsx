import React from "react";
import Home from "./../views/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
