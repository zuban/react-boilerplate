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

  SENT_SIGNUP_DATA,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

} from './constants'

const initialState = fromJS({
  loading: false,
  loginErrorMessage: null,
  loginSuccessMessage: null,

  signupErrorMessage: null,
  signupSuccessMessage: null,
})

function loginContainerReducer (state = initialState, action) {
  switch (action.type) {
    case SENT_LOGIN_DATA:
      return state
        .set('loading', true)
        .set('loginErrorMessage', null)
        .set('loginSuccessMessage', null)
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('loginSuccessMessage', 'Login success')
        .set('loginErrorMessage', null)
    case LOGIN_FAIL:
      return state
        .set('loading', false)
        .set('loginSuccessMessage', null)
        .set('loginErrorMessage', action.error)

    case SENT_SIGNUP_DATA:
      return state
        .set('loading', false)
        .set('signupSuccessMessage', null)
        .set('signupErrorMessage', null)
    case SIGNUP_SUCCESS:
      return state
        .set('loading', false)
        .set('signupSuccessMessage', 'Now you can login')
        .set('signupErrorMessage', null)
    case SIGNUP_FAIL:
      return state
        .set('loading', false)
        .set('signupSuccessMessage', null)
        .set('signupErrorMessage', action.error)
    default:
      return state
  }
}

export default loginContainerReducer
