import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {all} from 'redux-saga/effects';

import PostsReducer from './reducers/postsReducer';
import UsersReducer from './reducers/usersReducer';

import {fetchPostWatcherSagas} from './saga/PostsSaga';
import {fetchUsersWatcherSagas} from './saga/UsersSaga';

function* rootSaga() {
  yield all([fetchPostWatcherSagas(), fetchUsersWatcherSagas()]);
}

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
});

const middleWares = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, composeWithDevTools(middleWares));

sagaMiddleware.run(rootSaga);

export default store;
