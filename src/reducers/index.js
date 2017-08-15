import { combineReducers } from 'redux'

function users (state = [], action) {

}

function currentPost (state = {}, action) {

}

const rootReducer = combineReducers({
  users,
  currentPost
})

export default rootReducer
