import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

import * as actions from './actions'

function * fetchUsers () {
  const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')

  yield put(actions.fetchUsersSuccess(users.data))
}

export default function * rootSaga () {
  yield takeLatest(actions.fetchUsers().type, fetchUsers)
}
