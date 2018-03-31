export function fetchRepoBranches( login, repo ) {
  var token = localStorage.getItem( 'githubToken' );
  return function( dispatch ) {
   return fetch( `https://api.github.com/repos/${ login }/${ repo }/branches`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
   } )
   .then( response => response.json() )
   .then( response => {
      console.log( response );
      dispatch( setRepoBranches( response ) );
   } )
   .catch( error => { console.log( 'request failed', error )} )
  }
}


//reducer functions
export function setCurrentRepo( repoName ) {
  return {
    type: 'SET_CURRENT_REPO',
    data: repoName
  }
}

export function setRepoBranches( response ) {
  return {
    type: 'SET_REPO_BRANCHES',
    data: response
  }
}


