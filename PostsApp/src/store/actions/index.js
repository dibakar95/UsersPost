export const ActionTypes = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',

  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
};

const fetchPostsRequest = () => {
  return {
    type: ActionTypes.FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = posts => {
  return {
    type: ActionTypes.FETCH_POSTS_SUCCESS,
    posts,
  };
};

const fetchPostsFailure = errorMessage => {
  return {
    type: ActionTypes.FETCH_POSTS_FAILURE,
    errorMessage,
  };
};

const fetchUsersRequest = () => {
  return {
    type: ActionTypes.FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = users => {
  console.log('usersSuccess', users);
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    users,
  };
};

const fetchUsersFailure = errorMessage => {
  return {
    type: ActionTypes.FETCH_USERS_FAILURE,
    errorMessage,
  };
};
export const ActionCreators = {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
};

const ActionTriggers = {
  fetchPostsRequest: dispatch => () =>
    dispatch(ActionCreators.fetchPostsRequest()),
  fetchPostsSuccess: dispatch => posts =>
    dispatch(ActionCreators.fetchPostsSuccess(posts)),
  fetchPostsFailure: dispatch => errorMessage =>
    dispatch(ActionCreators.fetchPostsFailure(errorMessage)),

  fetchUsersRequest: dispatch => () =>
    dispatch(ActionCreators.fetchUsersRequest()),
  fetchUsersSuccess: dispatch => users =>
    dispatch(ActionCreators.fetchUsersSuccess(users)),
  fetchUsersFailure: dispatch => errorMessage =>
    dispatch(ActionCreators.fetchUsersFailure(errorMessage)),
};

export default ActionTriggers;
