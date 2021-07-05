import {ActionTypes} from '../actions';
const intitalState = {
  users: [],
  errorMessage: '',
  isLoading: false,
};
const UsersReducer = (state = intitalState, action) => {
  console.log('UserReducer---->', action.type);
  switch (action.type) {
    case ActionTypes.FETCH_USERS_REQUEST:
      return {...state, isLoading: true};
    case ActionTypes.FETCH_USERS_SUCCESS:
      console.log('action--->FetchYser', action.users);
      return {...state, isLoading: false, users: action.users};
    case ActionTypes.FETCH_USERS_FAILURE:
      return {...state, isLoading: false, errorMessage: action.errorMessage};
    default:
      return state;
  }
};
export default UsersReducer;
