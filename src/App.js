import React from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/account/profile"
          render={ () => <AccountProfile /> }
        />
      </Switch>
    </Container>
  </>
)

export default App;
