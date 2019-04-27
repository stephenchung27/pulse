export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = (data) => {
  return {
    type: RECEIVE_DATA,
    data,
  }
}