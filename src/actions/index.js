import { createActions } from 'redux-actions'

export const {
  fetchUsers,
  fetchUsersSuccess
} = createActions({
  FETCH_USERS: () => {},
  FETCH_USERS_SUCCESS: users => users
})

export const {
  fetchPosts,
  fetchPostsSuccess
} = createActions({
  FETCH_POSTS: userId => ({userId}),
  FETCH_POSTS_SUCCESS: posts => posts
})
