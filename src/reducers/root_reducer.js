import { combineReducers } from 'redux';
import entities from './entities/entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';

export default combineReducers({
  entities,
  ui,
  session,
});