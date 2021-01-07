import React from 'react';
import { Router,Route, Switch } from 'react-router-dom';
import { history } from './Helpers';
import FormApp from './Form'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={FormApp} />
      </Switch>
    </Router>
  );
}

export default App;
