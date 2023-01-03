import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

import { allSignIn } from './login/reducer';
import { allSignUp } from './signUp/reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  reducer: {
    allSignIn,
    allSignUp,
  },
});
sagaMiddleware.run(rootSaga);

export default store;
