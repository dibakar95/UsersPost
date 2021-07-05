import {ActionTypes} from '../actions';
const intitalState = {
  posts: [],
  errorMessage: '',
  isLoading: false,
};
const PostsReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_REQUEST:
      return {...state, isLoading: true};
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {...state, isLoading: false, posts: action.posts};
    case ActionTypes.FETCH_POSTS_FAILURE:
      return {...state, isLoading: false, errorMessage: action.errorMessage};
    default:
      return state;
  }
};
export default PostsReducer;
