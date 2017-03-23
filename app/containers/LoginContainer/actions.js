/*
 *
 * LoginContainer actions
 *
 */

import {
  SENT_LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

export const login = (login, password) => ({
  type: SENT_LOGIN_DATA,
  login,
  password
})
