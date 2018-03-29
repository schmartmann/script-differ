import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Hello from '../components/Hello';
import * as AuthActions from '../actions/auth'

function mapStateToProps( state ) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( AuthActions, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )( Hello );
