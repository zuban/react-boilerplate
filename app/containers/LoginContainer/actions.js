/*
 *
 * LoginContainer actions
 *
 */

import {
  SENT_LOGIN_DATA,
} from './constants'

export const login = (login, password) => ({
  type: SENT_LOGIN_DATA,
  login,
  password
})
