import { parse } from 'url';

export function requestGithubToken( options, code ) {
  Object.assign( options, code );

  return function( dispatch ) {
    fetch( 'https://github.com/login/oauth/access_token', {
      method: 'POST',
      body: JSON.stringify( options ),
      headers: { 'Content-Type': 'application/json' }
    } )
    .then( response => response.json() )
    .then( resonse => {
      console.log( response );
      dispatch( logIn( response ) );
    } )
  }
};

export function logIn( response ) {
  return {
    type: 'LOG_IN',
    data: response
  }
}

