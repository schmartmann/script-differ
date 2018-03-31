// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import user from './user';
import repo from './repos';

const rootReducer = combineReducers({
  auth,
  user,
  repo,
  router,
});

export default rootReducer;
