/*
 *
 * Form actions
 *
 */

import {
  GET_FORM_DATA,
  SAVE_FORM_DATA,
  CREATE_PDF,
  SET_MESSAGE,
  SET_ERROR_MESSAGE,
} from './constants'

export const getFormData = (id) => ({
  type: GET_FORM_DATA,
  id
})

export const saveFormData = (data) => ({
  type: SAVE_FORM_DATA,
  data
})

export const createPdf = (data) => ({
  type: CREATE_PDF,
  data
})

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
})
export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
})
