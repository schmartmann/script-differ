import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListView, ListViewHeader, ListViewFooter,
        Text, ListViewSeparator } from 'react-desktop/macOs'
import Repo from './Repo';
import Branch from './Branch';

export default class Repos extends Component {
  reposList() {
    var repos = this.props.repo.repos;
    var currentRepo = this.props.repo.currentRepo;
    const { login } = this.props.user;
    const { fetchRepoBranches } = this.props;

    if ( !login ) {
      this.props.history.push( '/auth' )
    }

    if ( !currentRepo ) {
      return repos.map( repo => {
        return(
          <Repo key={ repo.id } repo={ repo } fetchRepoBranches={ fetchRepoBranches }/>
        )
      } )
    } else {
      var repo = repos.find( repo => repo.name === currentRepo );
      return this.props.repo.currentRepoBranches.map( branch => {
        return (
          <Branch key={ branch.commit.sha } branch={ branch } repo={ repo }/>
        )
      })
    }
  }
  headerText() {
    var currentRepo = this.props.repo.currentRepo;
    const { login } = this.props.user;

    return currentRepo ?
    ( <Text>{ login }/{ currentRepo }</Text> ) :
    ( <Text>{ login }</Text> )
  }
  footerText() {
    var currentRepo = this.props.repo.currentRepo;
    const { setCurrentRepo } = this.props;

    return currentRepo ?
    ( <Text onClick={ setCurrentRepo.bind( this, null ) }>Back to repositories.</Text> ) :
    ( <Text>
        <Link to="/user" >Back to profile.</Link>
      </Text> )
  }
  render() {
    return(
      <div>
        <ListView background="#f1f2f4">
          <ListViewHeader>
            { this.headerText() }
          </ListViewHeader>
            { this.reposList() }
          <ListViewFooter>
            { this.footerText() }
          </ListViewFooter>
        </ListView>
      </div>
    )
  }

}
