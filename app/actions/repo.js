const GITHUB_API_URL = 'https://api.github.com/'

export function fetchRepoBranches( login, repo ) {
  var token = localStorage.getItem( 'githubToken' );
  return function( dispatch ) {
   dispatch( setCurrentRepo( repo ) );

   return fetch( `${ GITHUB_API_URL }repos/${ login }/${ repo }/branches`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
   } )
   .then( response => response.json() )
   .then( response => {
      dispatch( setRepoBranches( response ) );
   } )
   .catch( error => { console.log( 'request failed', error )} )
  }
}

export function compareDefaultBranch( login, repo, defaultBranch, currentBranch ) {
  var token = localStorage.getItem( 'githubToken' );
  return function( dispatch ) {
    return fetch( `${ GITHUB_API_URL }repos/${ login }/${ repo }/compare/${ defaultBranch }...${ currentBranch  }`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
      }
    } )
    .then( response => response.json() )
    .then( response => {
      console.log( response )
      dispatch( setCurrentDiff( response ) );
    } )
  }
}


//reducer functions
export function setCurrentRepo( repo ) {
  return {
    type: 'SET_CURRENT_REPO',
    data: repo
  }
}

export function setRepoBranches( response ) {
  return {
    type: 'SET_REPO_BRANCHES',
    data: response
  }
}

export function setCurrentDiff( response ) {
  return {
    type: 'SET_CURRENT_DIFF',
    data: response
  }
}
