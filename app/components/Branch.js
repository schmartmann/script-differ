import React, { Component } from 'react';
import { ListViewSection, ListViewRow, Text } from 'react-desktop/macOs';

export default class Branch extends Component {
  render() {
    const { branch, repo } = this.props;
    console.log( this.props )
    return(
        <ListViewSection header={ branch.name }>
          <ListViewRow>
            <Text>
              Last commit: { branch.commit.sha }
            </Text>
          </ListViewRow>
          <ListViewRow>
            <Text>
              Compare to <strong>{ repo.default_branch }</strong>
            </Text>
          </ListViewRow>
        </ListViewSection>
    )
  }
}
