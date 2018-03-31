import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import * as AuthActions from '../actions/auth'

function mapStateToProps( state ) {
  return {
    user: state.user,
    repos: state.repos
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( AuthActions, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( User );
