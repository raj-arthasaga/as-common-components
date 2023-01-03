import { all, fork } from 'redux-saga/effects';
import getAllSignSaga from './login/saga';
import getAllSignUpSaga from './signUp/saga';

export function* rootSaga() {
  yield all([fork(getAllSignSaga)]);
  yield all([fork(getAllSignUpSaga)]);
}
