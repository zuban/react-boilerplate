import { createSelector } from 'reselect'

const selectHome = (state) => state.get('home')

const makeSelectTags = () => createSelector(
  selectHome,
  (homeState) => homeState.get('tags').toJS()
)

const makeSelectHome = () => createSelector(
  selectHome,
  (homeState) => homeState.toJS(),
)

export {
  makeSelectHome,
  makeSelectTags,
};
