import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const { fetchRepoBranches } = this.props;
    const { repo } = this.props;
    return(
      <div>
        <ul key={ repo.id }>
          <li>
            <strong>{ repo.name }</strong>
          </li>

          <li>
            Description: { repo.description }
          </li>

          <li>
            Default Branch: { repo.default_branch }
          </li>
          <li onClick={ fetchRepoBranches.bind( this, repo.owner.login, repo.name ) }>
            View Branches
          </li>
        </ul>
      </div>
    )
  }
}
