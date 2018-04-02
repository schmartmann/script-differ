import React, { Component } from 'react';
import { ListViewSection, ListViewRow, Text } from 'react-desktop/macOs';

export default class Branch extends Component {
  compareDefault( branchName, defaultBranch ) {
    const { branch, repo, compareDefaultBranch } = this.props;

    return repo.default_branch !== branch.name ?
      ( <Text onClick={ compareDefaultBranch.bind( this, repo.owner.login,
              repo.name, repo.default_branch, branch.name )  }>
              Compare to <strong>{ repo.default_branch }</strong>
      </Text> ) :
      ( null )
  }
  render() {
    const { branch, repo } = this.props;
    return(
        <ListViewSection header={ branch.name }>
          <ListViewRow>
            <Text>
              Last commit: { branch.commit.sha }
            </Text>
          </ListViewRow>
          <ListViewRow>
            { this.compareDefault() }
          </ListViewRow>
        </ListViewSection>
    )
  }
}
