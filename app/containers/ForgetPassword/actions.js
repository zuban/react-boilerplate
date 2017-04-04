/*
 *
 * ForgetPassword actions
 *
 */

import {
  REMEMBER_PASSWORD,
} from './constants'

export function rememberPassword () {
  return {
    type: REMEMBER_PASSWORD,
  }
}
