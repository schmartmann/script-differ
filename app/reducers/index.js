// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import auth from './auth';

const rootReducer = combineReducers({
  counter,
  auth,
  router,
});

export default rootReducer;
