import { RECEIVE_PILLS } from '../../actions/pill_actions'

export default (state = {}, action) => {
  
  switch (action.type) {
    case RECEIVE_PILLS:
      return action.pills;
    default:
      return state;
  }
};