/*
 *
 * Form actions
 *
 */

import {
  GET_FORM_DATA,
  SAVE_FORM_DATA,
} from './constants'

export const getFormData = (id) => ({
  type: GET_FORM_DATA,
  id
})

export const saveFormData = (data) => ({
  type: SAVE_FORM_DATA,
  data
})
