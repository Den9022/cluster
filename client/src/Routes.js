import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Results from "./Results";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}
