import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Repos from './Repos';

export default class UserData extends Component {
  render() {
    const { login, id, avatarUrl, publicRepos } = this.props.user;
    return(
      <div>
        <h1>Welcome, { login }</h1>
        <img src={ avatarUrl }/>
        <p>Public Repos: { publicRepos }</p>
        <Link to="/repos">View your Repositories</Link>
      </div>
    )
  }
}
