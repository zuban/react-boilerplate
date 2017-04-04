/*
 *
 * Form reducer
 *
 */

import { fromJS } from 'immutable'
import {
  GET_FORM_DATA,
  GET_FORM_DATA_SUCCESS,
  GET_FORM_DATA_ERROR,
} from './constants'

const initialState = fromJS({
  loading: true,
  formData: null,
})

function formReducer (state = initialState, action) {
  switch (action.type) {
    case GET_FORM_DATA:
      return state
        .set('loading', true)
        .set('formData', null)
    case GET_FORM_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('formData', action.formData)
    case GET_FORM_DATA_ERROR:
      return state
        .set('loading', false)
        .set('formData', null)
    default:
      return state
  }
}

export default formReducer
