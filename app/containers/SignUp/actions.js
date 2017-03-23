/*
 *
 * SignUp actions
 *
 */

import {
  SIGNUP,
} from './constants'

export const signup = (login, email, password) => ({
  type: SIGNUP,
  login,
  email,
  password
})
