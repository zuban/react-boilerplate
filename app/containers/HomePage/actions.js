/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_TAGS,
  SET_TEXT,
  SET_TAGS,
  ADD_TAG,

  GET_SVG
} from './constants'

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 * @param tags
 */
export const getTags = (tags = '') => ({
  type: GET_TAGS,
  tags,
})
/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 * @param tags
 */
export const setTags = (tags) => ({
  type: SET_TAGS,
  tags,
})
/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 * @param tags
 */
export const setText = (text) => ({
  type: SET_TEXT,
  text,
})
/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 * @param tags
 */
export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
})
/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 * @param tags
 */
export const getSVG = () => ({
  type: GET_SVG,
})
