const DEFAULT_STATE = {
  user: null,
  token: null,
  loggedIn: false
}

export default function auth(
  state = DEFAULT_STATE, action ) {
  switch( action.type ) {
    case 'LOG_IN':
      return state;
    default:
      return state;
  }
}
