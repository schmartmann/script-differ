import React, { Component } from 'react';
import Repos from './Repos';

export default class UserData extends Component {
  render() {
    const { login, id, avatarUrl, publicRepos } = this.props.user;
    return(
      <div>
        <h1>Welcome, { login }</h1>
        <img src={ avatarUrl }/>
        <p>Public Repos: { publicRepos }</p>
        <Repos repos={ this.props.repos }/>
      </div>
    )
  }
}
