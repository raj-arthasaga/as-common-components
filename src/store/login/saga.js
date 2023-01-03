import { call, put, takeLatest } from 'redux-saga/effects';
import { SignList } from '../../api/sign';
import { getSignFailure, setSignSuccess } from './action';
import { GET_SIGN } from './actionTypes';

function* getAllSign(action) {
  console.log('in saga payload 4 allBlogs', action);
  try {
    const response = yield call(SignList, action.payload);
    console.log('login response', response);

    action.callBack && action.callBack(response);

    if (response.status_code === 200) {
      yield put(setSignSuccess(response));
      const token = JSON.stringify(response.data);
      console.log(token, 'token');
      localStorage.setItem('@Token', token);
    } else {
      yield put(getSignFailure(response));
    }

    // yield put(setAllBlogs({ response }));
  } catch (error) {
    console.log(error, 'this is e saga');
  }
}

function* getAllSignSaga() {
  yield takeLatest(GET_SIGN, getAllSign);
}

export default getAllSignSaga;
