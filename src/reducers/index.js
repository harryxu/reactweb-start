import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const users = handleActions({
  [actions.fetchUsers]: (state, action) => (null),

  [actions.fetchUsersSuccess]: (state, action) => (
    action.payload
  )
}, [])

function posts (state = [], action) {
  return state
}

function currentPost (state = {}, action) {
  return state
}

const rootReducer = combineReducers({
  users,
  posts,
  currentPost
})

export default rootReducer
