/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  errorMessage: null,
  successMessage: null,
})

function signUpContainerReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return state
        .set('loading', true)
        .set('errorMessage', null)
        .set('successMessage', null)
    case SIGNUP_COMPLETED:
      return state
        .set('loading', false)
        .set('successMessage', 'Signup success, now you can login')
        .set('errorMessage', null)
    case SIGNUP_ERROR:
      return state
        .set('loading', false)
        .set('errorMessage', action.error)
        .set('successMessage', null)
    default:
      return state
  }
}

export default signUpContainerReducer
