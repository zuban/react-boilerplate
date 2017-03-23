import { take, call, put, select, takeLatest } from 'redux-saga/effects'
import {
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,

  GET_SVG,
  GET_SVG_SUCCESS,
  GET_SVG_ERROR
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export function* tagsSaga () {
  const watcher = yield takeLatest(GET_TAGS, getTags)
  yield take(GET_TAGS)
}

export function* svgSaga () {
  const watcher = yield takeLatest(GET_SVG, getSVG)
  yield take(GET_SVG)
}

function* getSVG (action) {
  try {
    const svg = yield call(service.getSVGByTagValue.bind(service), '', '')

    yield put({
      type: GET_SVG_SUCCESS,
      svg,
    })

  }
  catch (error) {
    yield put({type: GET_SVG_ERROR, error: error.message})
  }
}

function* getTags (action) {
  try {
    const tags = yield call(service.getTags.bind(service),
      action.tags,
    )
    yield put({
      type: GET_TAGS_SUCCESS,
      tags,
    })

  }
  catch (error) {
    yield put({type: GET_TAGS_ERROR, error: error.message})
  }
}

// All sagas to be loaded
export default [
  tagsSaga,
  svgSaga
]
