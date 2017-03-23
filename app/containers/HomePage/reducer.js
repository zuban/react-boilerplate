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
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,

  SET_TEXT,
  SET_TAGS,
  ADD_TAG,

  GET_SVG,
  GET_SVG_SUCCESS,
  GET_SVG_ERROR
} from './constants'

// The initial state of the App
const initialState = fromJS({
  tags: {
    loading: true,
    tags: []
  },
  svg: [],
  selectedTags: [],
  text: null,
  fetching: true,
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return state
        .setIn(['tags', 'loading'], true)
        .setIn(['tags', 'tags'], [])
    case GET_TAGS_SUCCESS:
      return state
        .setIn(['tags', 'loading'], false)
        .setIn(['tags', 'tags'], action.tags)
    case GET_TAGS_ERROR:
      return state
        .setIn(['tags', 'loading'], false)
        .setIn(['tags', 'tags'], [])
    case SET_TAGS:
      return state
        .set('selectedTags', action.tags)
    case SET_TEXT:
      return state
        .set('text', action.text)
    case ADD_TAG:
      return state
        .set('selectedTags', [...state.get('selectedTags'), action.tag])
    case GET_SVG:
      return state
        .set('fetching', true)
        .set('svg', [])
    case GET_SVG_SUCCESS:
      return state
        .set('fetching', false)
        .set('svg', action.svg)
    case GET_SVG_ERROR:
      return state
        .set('fetching', false)
        .set('svg', [])
    default:
      return state
  }
}

export default homeReducer
