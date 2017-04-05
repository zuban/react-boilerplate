import { take, call, put, select, takeEvery } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import {
  REMEMBER_PASSWORD,
  REMEMBER_PASSWORD_SUCCESS,
  REMEMBER_PASSWORD_ERROR,
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export function* rememberSaga () {
  yield takeEvery(REMEMBER_PASSWORD, rememberPassword)
}

function* rememberPassword (action) {
  try {
    console.log(action)
    const payload = yield call(service.rememberPassword.bind(service),
      action.login,
    )
    yield put({type: REMEMBER_PASSWORD_SUCCESS})
  }
  catch (error) {
    yield put({type: REMEMBER_PASSWORD_ERROR, error: error.message})
  }
}

// All sagas to be loaded
export default [
  rememberSaga,
]
