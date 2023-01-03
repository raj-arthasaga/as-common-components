import { call, put, takeLatest } from 'redux-saga/effects';
import { SignUpList } from '../../api/signUp';
import { getSignUpFailure, getSignUpSuccess } from './action';
import { GET_SIGNUP } from './actionTypes';

function* getAllSignUp(action) {
  try {
    const response = yield call(SignUpList, action.payload);
    console.log('Sign response', response);

    action.callBack && action.callBack(response);

    if (response.status_code === 200) {
      yield put(getSignUpSuccess(response));
      const token = JSON.stringify(response.data);
      console.log(token, 'token');
      localStorage.setItem('@Token', token);
    } else {
      yield put(getSignUpFailure(response));
    }

    // yield put(setAllBlogs({ response }));
  } catch (error) {
    console.log(error, 'this is e saga');
  }
}

function* getAllSignUpSaga() {
  yield takeLatest(GET_SIGNUP, getAllSignUp);
}

export default getAllSignUpSaga;
