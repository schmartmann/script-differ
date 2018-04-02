const DEFAULT_STATE = {
  repos: [],
  currentRepo: null,
  currentRepoBranches: [],
  currentBranch: null,
  commits: [],
  diff: null
}

export default function repos( state = DEFAULT_STATE, action ) {
  switch( action.type ) {
    case 'SET_USER_REPOS':
      return {
        ...state,
        repos: action.data
      }
    case 'SET_CURRENT_REPO':
      return {
        ...state,
        currentRepo: action.data
      }
    case 'SET_REPO_BRANCHES':
      return {
        ...state,
        currentRepoBranches: action.data
      }
    case 'SET_CURRENT_BRANCH':
      return {
        ...state,
        currentBranch: action.data
      }
    case 'SET_CURRENT_DIFF':
      return {
        ...state,
        diff: action.data
      }
    case 'SET_BRANCH_COMMITS':
      return {
        ...state,
        commits: action.data
      }
    default:
      return state;
  }
}
