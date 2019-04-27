import { RECEIVE_REPORT } from '../../actions/report_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPORT:
      return action.report;
    default:
      return state;
  }
};