export function fetchRepoBranches( login, repo ) {
  var token = localStorage.getItem( 'githubToken' );
  return function( dispatch ) {
   dispatch( setCurrentRepo( repo ) );

   return fetch( `https://api.github.com/repos/${ login }/${ repo }/branches`, {
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


