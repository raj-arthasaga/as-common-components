import { GET_SIGNUP, GET_SIGNUP_SUCCESS } from './actionTypes';

const initialState = {
  singIn: {},
  isLoading: false,
};

export const allSignUp = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIGNUP:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SIGNUP_SUCCESS:
      // console.log('all blogs response');
      return {
        ...state,
        singIn: action.payload,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
