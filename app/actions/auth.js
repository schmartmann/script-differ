import { parse } from 'url';
const electron = require( 'electron' );
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export function authGithub() {
  return function( dispatch ) {
    var options = {
      client_id: 'bf003d7cffb2f78ec8a4',
      client_secret: 'f6c6d946e272684219a8487e4cbacfdf93545ab3',
      scopes: [ "user:email", "notifications" ]
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
};

export function requestGithubToken( options, code ) {
  return function( dispatch ) {
    fetch( 'https://github.com/login/oauth/access_token', {
      method: 'POST',
      body: JSON.stringify(
        {
          client_id: options.client_id,
          client_secret: options.client_secret,
          code: code
        }
      ),
      headers: { 'Content-Type': 'application/json' }
    } )
    .then( response => response.json() )
    .then( response => {
      console.log( response );
      debugger
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

