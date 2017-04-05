import { take, call, put, select, takeEvery } from 'redux-saga/effects'
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

import { getService } from '../../service/Service'
const service = new getService()

export function* loginSaga () {
  yield takeEvery(SENT_LOGIN_DATA, loginUser)
}

export function* signUpSaga () {
  yield takeEvery(SENT_SIGNUP_DATA, signUpUser)
}

function* loginUser (action) {
  try {
    console.log(action)
    const payload = yield call(service.login.bind(service),
      action.login,
      action.password
    )
    yield put({type: LOGIN_SUCCESS})
    yield put({type: SET_AUTHENTICATED})
    browserHistory.push('/jotform/')
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
    yield put({type: SIGNUP_SUCCESS})
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
