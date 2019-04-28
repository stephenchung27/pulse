import { combineReducers } from 'redux';
import users from './users_reducer';
import pills from './pills_reducer';
import report from './report_reducer';

export default combineReducers({
  users,
  pills,
  report,
});