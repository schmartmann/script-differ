// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/Auth">Auth</Link>
        </div>
      </div>
    );
  }
}
