import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicketGenerator from "./ticket-generator";
import NumberGen from "./number-gen";
import Home from "./home";
import Page from "./page";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page>
            <Home />
          </Page>
        </Route>
        <Route path="/tickets">
          <Page>
            <TicketGenerator />
          </Page>
        </Route>
        <Route path="/numbers">
          <Page>
            <NumberGen />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
