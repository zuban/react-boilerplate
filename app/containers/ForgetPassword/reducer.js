/*
 *
 * ForgetPassword reducer
 *
 */

import { fromJS } from 'immutable'
import {
  REMEMBER_PASSWORD,
  REMEMBER_PASSWORD_SUCCESS,
  REMEMBER_PASSWORD_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  state: null
})

function forgetPasswordReducer (state = initialState, action) {
  switch (action.type) {
    case REMEMBER_PASSWORD:
      return state
    default:
      return state
  }
}

export default forgetPasswordReducer
