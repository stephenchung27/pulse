import * as PillAPI from "../utils/pill_util";
export const RECEIVE_PILLS = "RECEIVE_PILLS";

export const receivePills = (pills) => {
  return {
    type: RECEIVE_PILLS,
    pills,
  }
}

export const fetchPills = () => {
  return dispatch => {
    return PillAPI.fetchReport().then(response => response.json()).then(pills => {
      return dispatch(receivePills(pills))
    });
  };
};
