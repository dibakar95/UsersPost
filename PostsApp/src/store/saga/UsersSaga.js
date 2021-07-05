import {put, takeLatest, call} from 'redux-saga/effects';
import {ActionCreators, ActionTypes} from '../actions';
import {getUsers} from '../../services';

export function* fetchUsersRequestSaga(action) {
  try {
    console.log('actionFetchPostsSaga', action);
    const response = yield call(getUsers);
    if (response) {
      console.log('fetchUsersRequestSaga', response);
      yield put(ActionCreators.fetchUsersSuccess(response));
    }
  } catch (error) {
    yield put(ActionCreators.fetchUsersFailure(error.message));
  }
}

export function* fetchUsersWatcherSagas() {
  yield takeLatest(ActionTypes.FETCH_USERS_REQUEST, fetchUsersRequestSaga);
}
