import { GET_SIGN, GET_SIGN_SUCCESS, GET_SIGN_FAILUIRE } from './actionTypes';

export const setSignSuccess = (payload) => {
  return {
    type: GET_SIGN_SUCCESS,
    payload,
  };
};

export const getSign = (payload, callBack) => {
  // console.log("getAllInitialBlogs", payload);
  return {
    type: GET_SIGN,
    payload,
    callBack,
  };
};

export const getSignFailure = (payload) => {
  return {
    type: GET_SIGN_FAILUIRE,
    payload,
  };
};
