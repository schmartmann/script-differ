const DEFAULT_STATE = {
  repos: []
}

export default function repos( state = DEFAULT_STATE, action ) {
  switch( action.type ) {
    case 'SET_USER_REPOS':
      return {
        repos: action.data
      }
    default:
      return state;
  }
}
