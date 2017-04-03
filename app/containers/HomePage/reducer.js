/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'

import {
  GET_FORMS,
  GET_FORMS_SUCCESS,
  GET_FORMS_ERROR,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  forms: [],
  fetching: true,
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case GET_FORMS:
      return state
        .set('fetching', true)
        .set('forms', [])
    case GET_FORMS_SUCCESS:
      return state
        .set('fetching', false)
        .set('forms', action.forms)
    case GET_FORMS_ERROR:
      return state
        .set('fetching', false)
        .set('forms', [])
    default:
      return state
  }
}

export default homeReducer
