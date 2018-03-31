/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import AuthPage from './containers/AuthPage';
import UserPage from './containers/UserPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={ CounterPage } />
      <Route path="/auth"    component={ AuthPage }/>
      <Route path="/user"    component={ UserPage }/>
      <Route path="/"        component={ HomePage } />
    </Switch>
  </App>
);
