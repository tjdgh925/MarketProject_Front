import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { authSaga } from '../sagas/authsaga';
import { authSlice } from './auth';

export function* rootSaga() {
  yield all([authSaga()]);
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default rootReducer;
