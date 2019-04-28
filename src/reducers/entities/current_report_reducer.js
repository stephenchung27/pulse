import { RECEIVE_CURRENT_REPORT } from '../../actions/report_actions';

export default (state = "bloodPressure", action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_REPORT:
      return action.report;
    default:
      return state;
  }
};