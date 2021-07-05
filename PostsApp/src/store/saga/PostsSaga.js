import {put, takeLatest, call} from 'redux-saga/effects';
import {ActionCreators, ActionTypes} from '../actions';
import {getPosts} from '../../services';

export function* fetchPostsRequestSaga(action) {
  try {
    const response = yield call(getPosts);
    if (response) {
      yield put(ActionCreators.fetchPostsSuccess(response));
    }
  } catch (error) {
    yield put(ActionCreators.fetchPostsFailure(error.message));
  }
}

export function* fetchPostWatcherSagas() {
  yield takeLatest(ActionTypes.FETCH_POSTS_REQUEST, fetchPostsRequestSaga);
}
