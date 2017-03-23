import { take, call, put, select, takeLatest } from 'redux-saga/effects'
import { SENT_LOGIN_DATA, LOGIN_SUCCESS, LOGIN_FAIL } from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export function* loginSaga () {
  const watcher = yield takeLatest(SENT_LOGIN_DATA, loginUser)
  yield take(SENT_LOGIN_DATA)
}

function* loginUser (action) {
  try {
    yield call(service.getSVG, action.login, action.password)
    yield put({type: LOGIN_SUCCESS})
  }
  catch (error) {
    put({type: LOGIN_FAIL, error})
  }
}

// All sagas to be loaded
export default [
  loginSaga,
]
