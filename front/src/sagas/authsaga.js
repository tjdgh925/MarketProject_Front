import { call, put, takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import { register, registerFailure, registerSuccess } from '../modules/auth';

function* registerSaga(action) {
  try {
    console.log(action.payload);
    yield call(authAPI.register, action.payload);
    yield put(registerSuccess(true));
  } catch (error) {
    console.log(error.response.data);
    yield put(registerFailure(error.response.data));
  }
}

export function* authSaga() {
  yield takeLatest(register, registerSaga);
}
