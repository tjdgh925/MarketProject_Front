import { call, put, takeLatest } from 'redux-saga/effects';
import * as profileAPI from '../lib/api/profile';

import {
  getProfile,
  getProfileSuccess,
  getProfileFailure,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
} from '../modules/profile';

function* getProfileSaga() {
  try {
    const response = yield call(profileAPI.getProfile);
    yield put(getProfileSuccess(response));
  } catch (error) {
    yield put(getProfileFailure(error.response.data));
  }
}

function* updateProfileSaga(action) {
  try {
    yield call(profileAPI.updateProfile, action.payload);
    yield put(updateProfileSuccess(true));
  } catch (error) {
    yield put(updateProfileFailure(error.response.data));
  }
}

export function* profileSaga() {
  yield takeLatest(getProfile, getProfileSaga);
  yield takeLatest(updateProfile, updateProfileSaga);
}
