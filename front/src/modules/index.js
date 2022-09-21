import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { authSaga } from '../sagas/authsaga';
import { profileSaga } from '../sagas/profilesaga';
import { authSlice } from './auth';
import { profileSlice } from './profile';

export function* rootSaga() {
  yield all([authSaga(), profileSaga()]);
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
});

export default rootReducer;
