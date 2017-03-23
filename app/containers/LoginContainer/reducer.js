/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SENT_LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants'

const initialState = fromJS({
  loading: false,
  errorMessage: null,
  successMessage: null,
})

function loginContainerReducer (state = initialState, action) {
  switch (action.type) {
    case SENT_LOGIN_DATA:
      return state
        .set('loading', true)
        .set('errorMessage', null)
        .set('successMessage', null)
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('successMessage', 'Login success')
        .set('errorMessage', null)
    case LOGIN_FAIL:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('successMessage', null)
    default:
      return state
  }
}

export default loginContainerReducer
