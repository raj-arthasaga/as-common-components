import { GET_SIGN, GET_SIGN_SUCCESS } from './actionTypes';

const initialState = {
  singIn: {},
  isLoading: false,
};

export const allSignIn = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIGN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SIGN_SUCCESS:
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
