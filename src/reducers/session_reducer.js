import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/user_actions';

export default (state = false, action) => {
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return true;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
};
