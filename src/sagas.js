import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

import * as actions from './actions'

function * fetchUsers () {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = yield call(axios.get, url)

  yield put(actions.fetchUsersSuccess(response.data))
}

function * fetchPosts (action) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${action.payload.userId}`
  const response = yield call(axios.get, url)

  yield put(actions.fetchPostsSuccess(response.data))
}

function * fetchSinglePost (action) {
  const url = `https://jsonplaceholder.typicode.com/posts/${action.payload.postId}`
  const response = yield call(axios.get, url)

  yield put(actions.fetchSinglePostSuccess(response.data))
}

export default function * rootSaga () {
  yield takeLatest(actions.fetchUsers().type, fetchUsers)
  yield takeLatest(actions.fetchPosts().type, fetchPosts)
  yield takeLatest(actions.fetchSinglePost().type, fetchSinglePost)
}
