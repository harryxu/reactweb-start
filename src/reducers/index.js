import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const users = handleActions({
  [actions.fetchUsers]: (state, action) => (null),

  [actions.fetchUsersSuccess]: (state, action) => (
    action.payload
  )
}, [])

const posts = handleActions({
  [actions.fetchPosts]: (state, action) => (null),
  [actions.fetchPostsSuccess]: (state, action) => (
    action.payload
  )
}, [])

const currentPost = handleActions({
  [actions.fetchSinglePost]: (state, action) => (null),
  [actions.fetchSinglePostSuccess]: (state, action) => (
    action.payload
  )
}, null)

const rootReducer = combineReducers({
  users,
  posts,
  currentPost
})

export default rootReducer
