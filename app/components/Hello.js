import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hello extends Component {
  constructor() {
    super();

    this.state = {};
  };
  componentDidMount() {
  }
  render() {
    return(
      <div>
        <h1> howdy friendo</h1>
        <p  onClick={ this.props.authGithub }>get nice and logged in</p>
        <Link to="/counter">
          <p>counter</p>
        </Link>
      </div>
    )
  }
}
