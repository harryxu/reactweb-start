import { combineReducers } from 'redux'

function users (state = [], action) {
  return state
}

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
