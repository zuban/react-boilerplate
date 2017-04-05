import { take, call, cancel, fork, put, select, takeLatest } from 'redux-saga/effects'
import {
  GET_FORMS,
  GET_FORMS_SUCCESS,
  GET_FORMS_ERROR,

  CREATE_NEW_FORM,
  CREATE_NEW_FORM_SUCCESS,
  CREATE_NEW_FORM_ERROR
} from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'
import { browserHistory } from 'react-router'

import { getService } from '../../service/Service'
const service = new getService()

export function* formsSaga () {
  const fetchWatcher = yield takeLatest(GET_FORMS, getForms)
  yield take(LOCATION_CHANGE)
  yield cancel(fetchWatcher)
}

export function* createRecordSaga () {
  const fetchWatcher = yield takeLatest(CREATE_NEW_FORM, createNewRecord)
  yield take(LOCATION_CHANGE)
  yield cancel(fetchWatcher)
}

function* getForms (action) {
  debugger
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

function* createNewRecord (action) {
  try {
    const id = yield call(service.createNewRecord.bind(service), action.formObj)
    yield put({
      type: CREATE_NEW_FORM_SUCCESS,
      id,
    })
    browserHistory.push(`/jotform/form/${id}`)
  }
  catch (error) {
    yield put({type: CREATE_NEW_FORM_ERROR, error: error.message})
  }
}

// All sagas to be loaded
export default [
  formsSaga,
  createRecordSaga,
];
