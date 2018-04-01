import React, { Component } from 'react';
import { ListViewRow, Text } from 'react-desktop/macOs';

export default class Repo extends Component {
  render() {
    const { fetchRepoBranches } = this.props;
    const { repo } = this.props;
    return(
      <ListViewRow onClick={ fetchRepoBranches.bind( this, repo.owner.login, repo.name ) }>
        <Text>{ repo.name }</Text>
      </ListViewRow>
    )
  }
}
