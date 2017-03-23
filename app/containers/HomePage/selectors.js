// /**
//  * Homepage selectors
//  */
//
// import { createSelector } from 'reselect';
//
// const selectHome = (state) => state.get('home');
//
// const makeHomeSelector = () => createSelector(
//   selectHome,
//   (homeState) => homeState.get('username')
// );
//
// export {
//   selectHome,
//   makeHomeSelector,
// };
import { createSelector } from 'reselect'

/**
 * Direct selector to the loginContainer state domain
 */
const selectHomeDomain = () => (state) => state.get('home')

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginContainer
 */

const makeHomeContainer = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.toJS()
)

export default makeHomeContainer
export {
  selectHomeDomain,
}
