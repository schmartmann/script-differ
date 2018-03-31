import React, { Component } from 'react';

export default class Repos extends Component {
  constructor() {
    super();

    this.state = { repos: null };
    this.reposList = this.reposList.bind( this );
  }
  componentWillMount() {
   this.setState( { repos: this.props.repos.repos } )
  }
  reposList() {
    var repos = this.state.repos;

    return repos.map( repo => {
      return(
        <li key={ repo.id }>{ repo.name }</li>
      )
    } )
  }
  render() {
    return(
      <div>
        <ul>
          { this.reposList() }
        </ul>
      </div>
    )
  }

}
