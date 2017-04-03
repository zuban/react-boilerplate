/*
 * AppReducer
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
  SET_AUTHENTICATED,
  SET_LOGOUT
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

// The initial state of the App
const initialState = fromJS({
  loading: false,
  userName: null,
  isAuthenticated: service.checkToken(),
})

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return state
        .set('isAuthenticated', true)
    case SET_LOGOUT:
      return state
        .set('isAuthenticated', false)
    default:
      return state
  }
}

export default appReducer
