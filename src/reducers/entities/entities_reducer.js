import { combineReducers } from 'redux';
import users from './users_reducer';
import prescriptions from './prescriptions_reducer';

export default combineReducers({
  users,
  prescriptions,
});