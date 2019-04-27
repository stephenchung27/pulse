export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_LOADING = "RECEIVE_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const receiveCurrentUser = () => {
  return {
    type: RECEIVE_CURRENT_USER,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const receiveLoading = () => {
  return {
    type: RECEIVE_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};