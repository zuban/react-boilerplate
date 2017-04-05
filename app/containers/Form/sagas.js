import { take, call, put, select, takeLatest } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import {
  GET_FORM_DATA,
  GET_FORM_DATA_SUCCESS,
  GET_FORM_DATA_ERROR,

  SAVE_FORM_DATA,
  SAVE_FORM_DATA_SUCCESS,
  SAVE_FORM_DATA_ERROR,

  CREATE_PDF,
  CREATE_PDF_SUCCESS,
  CREATE_PDF_ERROR
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

import makeSelectForm from './selectors'

export function* getFormSaga () {
  const watcher = yield takeLatest(GET_FORM_DATA, getForm)
  yield take(GET_FORM_DATA)
}

export function* saveFormDataSaga () {
  const watcher = yield takeLatest(SAVE_FORM_DATA, saveFormData)
  yield take(SAVE_FORM_DATA)
}

export function* createPdfSaga () {
  const watcher = yield takeLatest(CREATE_PDF, createPdf)
  yield take(CREATE_PDF)
}

function* getForm (action) {
  try {
    let data = yield call(service.getFormById.bind(service),
      action.id,
    )
    let payload = data.formData
    if (payload.area) {
      let area = payload.area.split(', ')
      delete payload.area
      area.forEach(item => {
        let name = `area;${item}`
        payload[name] = true
      })
    }
    if (payload.motionintheclip) {
      let motionintheclip = payload.motionintheclip.split(', ')
      delete payload.motionintheclip
      motionintheclip.forEach(item => {
        let name = `motionintheclip;${item}`
        payload[name] = true
      })
    }
    if (payload.cameradirection) {
      let cameradirection = payload.cameradirection.split(', ')
      delete payload.cameradirection
      cameradirection.forEach(item => {
        let name = `cameradirection;${item}`
        payload[name] = true
      })
    }
    if (payload.weather) {
      let weather = payload.weather.split(', ')
      delete payload.weather
      weather.forEach(item => {
        let name = `weather;${item}`
        payload[name] = true
      })
    }
    if (payload.additionalfiles) {
      let additionalfiles = payload.additionalfiles.split(', ')
      delete payload.additionalfiles
      additionalfiles.forEach(item => {
        let name = `additionalfiles;${item}`
        payload[name] = true
      })
    }

    data.formData = payload
    yield put({
      type: GET_FORM_DATA_SUCCESS,
      formData: data,
    })
  }
  catch (error) {
    yield put({type: GET_FORM_DATA_ERROR, error: error.message})
  }
}
function* saveFormData (action) {
  let state = yield select(makeSelectForm())
  debugger
  try {
    let data = state.formData
    data.formData = action.data
    let payload = yield call(service.saveFormById.bind(service),
      data
    )
    yield put({
      type: SAVE_FORM_DATA_SUCCESS,
    })
  }
  catch (error) {
    yield put({type: SAVE_FORM_DATA_ERROR, error: error.message})
  }
}
function* createPdf (action) {
  try {
    let payload = yield call(service.createPdf.bind(service),
      action.data
    )

    window.open('data:application/pdf,' + escape(payload))
    yield put({
      type: CREATE_PDF_SUCCESS,
    })
  }
  catch (error) {
    yield put({type: CREATE_PDF_ERROR, error: error.message})
  }
}

// All sagas to be loaded
export default [
  getFormSaga,
  saveFormDataSaga,
  createPdfSaga,
]
