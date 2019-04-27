import { combineReducers } from 'redux';
import users from './users_reducer';
import prescriptions from './prescriptions_reducer';
import report from './report_reducer';

export default combineReducers({
  users,
  prescriptions,
  report,
});