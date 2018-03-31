// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import user from './user';
import repos from './repos';

const rootReducer = combineReducers({
  auth,
  user,
  repos,
  router,
});

export default rootReducer;
