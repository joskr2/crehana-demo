import React from "react";
import Home from "./components/SearchBar/SearchBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home
          languageOptions={["ES", "EN", "PT"]}
          currencyOptions={["S/", "$/", "D/"]}
          regionOptions={["region1", "region2", "region3"]}
        />
      </Route>
      =
    </Switch>
  </Router>
);

export default App;
