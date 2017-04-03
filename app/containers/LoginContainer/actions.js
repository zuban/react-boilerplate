/*
 *
 * LoginContainer actions
 *
 */

import {
  SENT_LOGIN_DATA,
  SENT_SIGNUP_DATA,
} from './constants'

export const login = (login, password) => ({
  type: SENT_LOGIN_DATA,
  login,
  password
})

export const signUp = (fields) => ({
  type: SENT_SIGNUP_DATA,
  fields,
})
