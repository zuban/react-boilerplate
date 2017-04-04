/*
 *
 * LoginContainer actions
 *
 */
import { getService } from '../../service/Service'
const service = new getService()

import {
  SENT_LOGIN_DATA,
  SENT_SIGNUP_DATA,
} from './constants'

import {
  SET_LOGOUT
} from '../App/constants'

export const login = (login, password) => ({
  type: SENT_LOGIN_DATA,
  login,
  password
})

export const signUp = (fields) => ({
  type: SENT_SIGNUP_DATA,
  fields,
})

// //check token
// export const checkAuth = () => {
//   if (!service.checkToken()) {
//     return {
//       type: SET_LOGOUT,
//     }
//   }
// }
