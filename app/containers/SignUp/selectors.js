import { createSelector } from 'reselect'

/**
 * Direct selector to the signUp state domain
 */
const selectSignUpDomain = () => (state) => {
  console.log(state.get('signUp'))
  return state.get('signUp')
}

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () => createSelector(
  selectSignUpDomain(),
  (substate) => substate.toJS()
)

export default makeSelectSignUp
export {
  selectSignUpDomain,
}
