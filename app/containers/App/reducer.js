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
import uuid from 'uuid'
import { fromJS } from 'immutable'

import {
  SET_AUTHENTICATED,
  SET_LOGOUT,

  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from './constants'

import { getService } from '../../service/Service'
const service = new getService()

// The initial state of the App
const initialState = fromJS({
  loading: false,
  userName: service.getCurrentUser(),
  isAuthenticated: service.checkToken(),
  notifications: [],
})

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return state
        .set('isAuthenticated', true)
        .set('userName', action.username)
    case SET_LOGOUT:
      return state
        .set('isAuthenticated', false)
        .set('userName', null)
    case ADD_NOTIFICATION: {
      let notifications = state.get('notifications').toJS()
      let notification = action.notification
      notification.id = uuid.v4()

      if (notifications.length > 3) {
        notifications.splice(0, 1)
      }
      notifications.unshift(notification)
      return state
        .set('notifications', notifications)
    }
    case REMOVE_NOTIFICATION: {
      debugger
      let notifications = state.get('notifications')
      let filteredNotifications = notifications.filter((item) => !(item.id === action.id))
      return state
        .set('notifications', filteredNotifications)
    }
    default:
      return state
  }
}

export default appReducer
