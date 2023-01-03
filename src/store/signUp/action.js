import { GET_SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILUIRE } from './actionTypes';

export const getSignUpSuccess = (payload) => {
  return {
    type: GET_SIGNUP_SUCCESS,
    payload,
  };
};

export const getSignUp = (payload, callBack) => {
  // console.log("getAllInitialBlogs", payload);
  return {
    type: GET_SIGNUP,
    payload,
    callBack,
  };
};

export const getSignUpFailure = (payload) => {
  return {
    type: GET_SIGNUP_FAILUIRE,
    payload,
  };
};
