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

export const {
  fetchSinglePost,
  fetchSinglePostSuccess
} = createActions({
  FETCH_SINGLE_POST: postId => ({postId}),
  FETCH_SINGLE_POST_SUCCESS: post => post
})
