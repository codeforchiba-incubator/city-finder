import { createSelector } from 'reselect';

/**
 * Direct selector to the spotPage state domain
 */
const selectSpotPage = () => (state) => state.get('spotPage');

/**
 * Other specific selectors
 */
const selectLoading = () => createSelector(
  selectSpotPage(),
  (state) => state.get('loading')
);


/**
 * Default selector used by SpotPage
 */
const selectSpot = () => createSelector(
  selectSpotPage(),
  (state) => state.get('spotData')
);

export default selectSpot;
export {
  selectLoading,
};
