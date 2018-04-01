import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const { fetchRepoBranches } = this.props;
    const { repo } = this.props;
    return(
      <li key={ repo.id } onClick={ fetchRepoBranches.bind( this, repo.owner.login, repo.name ) }>
        <strong>{ repo.name }</strong><br/>
        { repo.description ? ( `Description: ${ repo.description }` ) : null }
        Default Branch: { repo.default_branch }<br/>
        <i>View Branches</i>
      </li>
    )
  }
}
