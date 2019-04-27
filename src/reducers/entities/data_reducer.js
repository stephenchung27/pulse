import { RECEIVE_DATA } from '../../actions/data_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
};