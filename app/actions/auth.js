import { parse } from 'url';
const electron = require( 'electron' );
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const GITHUB_API_URL = 'https://api.github.com/'

export function authGithub() {
  var localToken = findToken();

  if ( localToken ){

    return function( dispatch ) {
      dispatch( logIn( localToken ) );
      dispatch( fetchUserInfo( localToken ) );
    }
  } else {

    return function( dispatch ) {
      var options = {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        scopes: [ "read:user", "repo" ]
      };

      var authWindow = new BrowserWindow( {
        width: 800,
        height: 600,
        show: true,
        webPreferences: {
          nodeIntegration: false
        }
      } )

      var githubUrl = 'https://github.com/login/oauth/authorize?';
      var authUrl = githubUrl + 'client_id=' + options.client_id + '&scope=' + options.scopes;

      authWindow.loadURL( authUrl )

      function handleCallback( url ) {
        var rawCode = /code=([^&]*)/.exec( url ) || null,
            code = ( rawCode && rawCode.length > 1 ) ? rawCode[ 1 ] : null,
            error = /\?error=(.+)&/.exec( url );

        if ( code ||  error ) {
          // close BrowserWindow if code found or error
          authWindow.destroy();
        }

        // If there is a code, get token from GitHub
        if ( code ) {
          dispatch( requestGithubToken( options, code ) )
        } else if ( error ) {
          alert( 'Oops! Something went wrong and we couldn\'t' +
            'log you in using GitHub. Please try again.'
          );
        }
      }

      authWindow.webContents.on( 'will-navigate', function( event, url ) {
        handleCallback( url, options );
      } )

      authWindow.webContents.on( 'did-get-redirect-request', function( event, oldUrl, newUrl ) {
        handleCallback( newUrl, options );
      } )

      authWindow.on( 'close', function() {
        authWindow = null;
      }, false )
    }
  }
};

export function requestGithubToken( options, code ) {
  return function( dispatch ) {
    return fetch( 'https://github.com/login/oauth/access_token', {
      method: 'POST',
      body: JSON.stringify(
        {
          client_id: options.client_id,
          client_secret: options.client_secret,
          code: code
        }
      ),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    } )
    .then( response => response.json() )
    .then( response => {
      setToken( response.access_token );
      dispatch( logIn( response ) );
      dispatch( fetchUserInfo( response.access_token ) );
    } )
    .catch( error => { console.log( 'request failed', error ); } );
  }
};

function findToken() {
  var localToken = localStorage.getItem( 'githubToken' ) || null;
  return localToken;
}

function setToken( token ) {
  var localToken = localStorage.setItem( 'githubToken', token );
}

export function fetchUserInfo( token ) {
  return function( dispatch ) {
    return fetch( `${ GITHUB_API_URL }user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
        }
    } )
    .then( response => response.json() )
    .then( response => {
      dispatch( setUserInfo( response ) );
      dispatch( fetchUserRepos( token, response.login ) );
    } )
    .catch( error => { console.log( 'request failed', error ); } );
  }
};

export function fetchUserRepos( token, login ) {
  return function( dispatch ) {
    return fetch( `${ GITHUB_API_URL}users/${ login }/repos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token }`
      }
    } )
    .then( response => response.json() )
    .then( response => {
      dispatch( setUserRepos( response ) );
    } )
    .catch( error => { console.log( 'request failed', error ); } );
  }
}

//REDUCER ACTIONS
export function logIn( response ) {
  return {
    type: 'LOG_IN',
    data: response
  }
}

export function setUserInfo( response ) {
  return {
    type: 'SET_USER_INFO',
    data: response
  }
}

export function setUserRepos( response ) {
  return {
    type: 'SET_USER_REPOS',
    data: response
  }
}
