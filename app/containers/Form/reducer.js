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
  SET_MESSAGE,
  SET_ERROR_MESSAGE,
  SAVE_FORM_DATA,
} from './constants'

const initialState = fromJS({
  loading: true,
  formData: null,
  message: null,
  errorMessage: null,
})

function formReducer (state = initialState, action) {
  switch (action.type) {
    case GET_FORM_DATA:
      return state
        .set('loading', true)
        .set('formData', null)
        .set('message', null)
        .set('errorMessage', null)
    case GET_FORM_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('formData', action.formData)
        .set('message', null)
        .set('errorMessage', null)
    case GET_FORM_DATA_ERROR:
      return state
        .set('loading', false)
        .set('formData', null)
        .set('message', null)
        .set('errorMessage', null)
    case SET_MESSAGE:
      return state
        .set('message', action.message)
        .set('errorMessage', null)
    case SET_ERROR_MESSAGE:
      return state
        .set('errorMessage', action.message)
        .set('message', null)
    case SAVE_FORM_DATA:
      return state
        .set('errorMessage', null)
        .set('message', 'Form successfully saved.')
    default:
      return state
  }
}

export default formReducer
