const DEFAULT_STATE = {
  login: null,
  id: null,
  avatarUrl: null,
  publicRepos: null
}

export default function user( state = DEFAULT_STATE, action ) {
  switch( action.type ) {
    case 'SET_USER_INFO':
      return {
        ...state,
        login: action.data.login,
        id: action.data.id,
        avatarUrl: action.data.avatar_url,
        publicRepos: action.data.public_repos
      }
    default:
      return state;
  }
}
