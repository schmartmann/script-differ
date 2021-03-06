import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Repos from '../components/Repos';
import * as RepoActions from '../actions/repo'

function mapStateToProps( state ) {
  return {
    user: state.user,
    repo: state.repo
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( RepoActions, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( Repos );
