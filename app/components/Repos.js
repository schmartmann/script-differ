import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Repos extends Component {
  reposList() {
    var repos = this.props.repos.repos;
    var currentRepo = this.props.repos.currentRepo;
    const { login } = this.props.user;
    const { fetchRepoBranches } = this.props;

    if ( !login ) {
      this.props.history.push( '/auth' )
    }

    if ( !currentRepo ) {
      return repos.map( repo => {
        return(
          <li key={ repo.id } onClick={ fetchRepoBranches.bind( this, login, repo.name ) }>{ repo.name }</li>
        )
      } )
    } else {
      return this.props.repos.currentRepoBranches.map( branch => {
        return (
          <li key={ branch.commit.sha }>{ branch.name }</li>
        )
      })
    }
  }
  header() {
    var currentRepo = this.props.repos.currentRepo;
    const { login } = this.props.user;

    return currentRepo ?
    ( <h1> Viewing branches for { currentRepo }</h1> ) :
    ( <h1>Viewing { login }'s Repositories</h1> )
  }
  footer() {
    var currentRepo = this.props.repos.currentRepo;
    const { setCurrentRepo } = this.props;

    return currentRepo ?
    ( <p onClick={ setCurrentRepo.bind( this, null ) }>Back to repositories.</p> ) :
    ( <Link to="/user" >Back to profile.</Link> )
  }
  render() {
    return(
      <div>
        { this.header() }
        <ul>
          { this.reposList() }
        </ul>
        { this.footer() }
      </div>
    )
  }

}
