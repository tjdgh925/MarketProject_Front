import { call, put, takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
} from '../modules/auth';

function* registerSaga(action) {
  try {
    yield call(authAPI.register, action.payload);
    yield put(registerSuccess(true));
  } catch (error) {
    yield put(registerFailure(error.response.data));
  }
}

function* loginSaga(action) {
  try {
    yield call(authAPI.login, action.payload);
    yield put(loginSuccess(true));
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* authSaga() {
  yield takeLatest(register, registerSaga);
  yield takeLatest(login, loginSaga);
}
