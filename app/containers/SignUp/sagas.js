import {
  take,
  call,
  put,
  select,
  takeLatest
} from 'redux-saga/effects'
import {
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export function* signUpSaga () {
  const watcher = yield takeLatest(SIGNUP, signUp)
  yield take(SIGNUP)
}

function* signUp (action) {
  try {
    const payload = yield call(service.singup.bind(service),
      action.login,
      action.email,
      action.password
    )
    yield put({type: SIGNUP_COMPLETED})
  }
  catch (error) {
    yield put({type: SIGNUP_ERROR, error: error.message})
  }
}

// All sagas to be loaded
export default [
  signUpSaga,
]
