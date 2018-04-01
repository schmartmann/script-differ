import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      return this.props.repo.currentRepoBranches.map( branch => {
        return (
          <Branch branch={ branch }/>
        )
      })
    }
  }
  header() {
    var currentRepo = this.props.repo.currentRepo;
    const { login } = this.props.user;

    return currentRepo ?
    ( <h1> Viewing branches for { currentRepo }</h1> ) :
    ( <h1>Viewing { login }'s Repositories</h1> )
  }
  footer() {
    var currentRepo = this.props.repo.currentRepo;
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
