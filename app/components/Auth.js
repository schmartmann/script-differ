import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Auth extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    };

    this.loggedIn = this.loggedIn.bind( this );
  };
  componentWillReceiveProps( nextProps ) {
    this.setState( { loggedIn: nextProps.auth.loggedIn } )
  }
  loggedIn() {
    return this.state.loggedIn ?
      ( <Link to="/user">You made it</Link> ) :
      ( <p  onClick={ this.props.authGithub }>get nice and logged in</p> )
  }
  render() {
    return(
      <div>
        <h1> howdy friendo</h1>
        { this.loggedIn() }
      </div>
    )
  }
}
