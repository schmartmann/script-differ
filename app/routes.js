/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AuthPage from './containers/AuthPage';
import UserPage from './containers/UserPage';
import ReposPage from './containers/ReposPage';
import { fetchUserInfo } from './actions/auth';

function requireAuth() {
  var token = localStorage.getItem( 'githubToken' ) || null;
  if ( token ) {
    fetchUserInfo( token )
    this.props.history.push( '/user' )
  } else {
    this.props.history.push( '/auth' )
  }
}

export default () => (
  <App>
    <Switch>
      <Route path="/auth"    component={ AuthPage }/>
      <Route path="/user"    component={ UserPage }/>
      <Route path="/repos"   component={ ReposPage }/>
      <Route path="/"        component={ HomePage } onEnter={ requireAuth }/>
    </Switch>
  </App>
);
