import React, { Component } from 'react';

export default class Branch extends Component {
  render() {
    const { branch } = this.props;
    return(
      <li key={ branch.commit.sha }>{ branch.name }</li>
    )
  }
}
