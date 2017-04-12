import { take, call, cancel, put, select, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import {
  SENT_LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  SENT_SIGNUP_DATA,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

} from './constants'

import {
  SET_AUTHENTICATED
} from '../App/constants'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getService } from '../../service/Service'
const service = new getService()

export function* loginSaga () {
  const fetchWatcher = yield takeLatest(SENT_LOGIN_DATA, loginUser)
  yield take(LOCATION_CHANGE)
  yield cancel(fetchWatcher)
}

export function* signUpSaga () {
  const fetchWatcher = yield takeLatest(SENT_SIGNUP_DATA, signUpUser)
  yield take(LOCATION_CHANGE)
  yield cancel(fetchWatcher)
}

function* loginUser (action) {
  try {
    console.log(action)
    const payload = yield call(service.login.bind(service),
      action.login,
      action.password
    )
    yield put({
      type: LOGIN_SUCCESS
    })
    yield put({
      type: SET_AUTHENTICATED,
      username: action.login
    })
    browserHistory.push('/video-submission-form/')
  }
  catch (error) {
    yield put({type: LOGIN_FAIL, error: error.message})
  }
}
function* signUpUser (action) {
  try {
    const payload = yield call(service.singup.bind(service),
      action.fields
    )
    const login = yield call(service.login.bind(service),
      action.fields.get('email'),
      action.fields.get('password')
    )
    yield put({type: LOGIN_SUCCESS})
    yield put({
      type: SET_AUTHENTICATED,
      username: action.fields.get('email')
    })
    browserHistory.push('/video-submission-form/')
  }
  catch (error) {
    yield put({type: SIGNUP_FAIL, error: error.message})
  }
}

// All sagas to be loaded
export default [
  loginSaga,
  signUpSaga,
]
