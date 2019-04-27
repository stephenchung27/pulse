import * as ReportAPI from "../utils/report_util";
export const RECEIVE_REPORT = "RECEIVE_REPORT";

export const receiveReport = (report) => {
  return {
    type: RECEIVE_REPORT,
    report,
  }
}

export const fetchReport = () => {
  return dispatch => {
    return ReportAPI.fetchReport().then(response => response.json()).then(report => {
      return dispatch(receiveReport(report))
    });
  };
};
