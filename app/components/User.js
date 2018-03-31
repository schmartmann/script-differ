import React, { Component } from 'react';
import UserData from './UserData';

export default class User extends Component {
  constructor() {
    super();

    this.state = {
      login: null,
      id: null,
      avatarUrl: null,
      publicRepos: null
    }

    this.renderUserData = this.renderUserData.bind( this );
  };
  componentWillMount() {
    if ( !this.props.user.login ) {
      this.props.history.push( '/auth' )
    }
  };
  renderUserData() {
    return this.props.user.login ?
    ( <UserData user={ this.props.user } repos={ this.props.repo }/> ) :
    ( <p>Not yet logged in</p>)
  }
  render() {
    return(
      <div>
        { this.renderUserData() }
      </div>
    )
  }
}
