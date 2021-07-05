import {createSelector} from 'reselect';

const postsState = state => {
  if (state.getState) {
    return state.getState().posts;
  }
  return state.posts;
};

const usersState = state => {
  if (state.getState) {
    return state.getState().users;
  }
  return state.users;
};

export const postsSelector = createSelector(
  postsState,
  posts => posts.posts,
);

export const usersSelector = createSelector(
  usersState,
  users => users.users,
);
