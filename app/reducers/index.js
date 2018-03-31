// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import auth from './auth';
import user from './user';
import repos from './repos';

const rootReducer = combineReducers({
  counter,
  auth,
  user,
  repos,
  router,
});

export default rootReducer;
