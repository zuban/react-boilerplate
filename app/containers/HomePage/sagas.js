import { take, call, put, select, takeLatest } from 'redux-saga/effects'
import {
  GET_FORMS,
  GET_FORMS_SUCCESS,
  GET_FORMS_ERROR,
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export function* formsSaga () {
  const watcher = yield takeLatest(GET_FORMS, getForms)
  yield take(GET_FORMS)
}

function* getForms (action) {
  try {
    const forms = yield call(service.getForms.bind(service), '', '')
    yield put({
      type: GET_FORMS_SUCCESS,
      forms,
    })
  }
  catch (error) {
    yield put({type: GET_FORMS_ERROR, error: error.message})
  }
}
// All sagas to be loaded
export default [
  formsSaga,
]
