import { createSelector } from 'reselect';

/**
 * Direct selector to the spotPage state domain
 */
const selectHome = () => (state) => state.get('home');

/**
 * Other specific selectors
 */
const selectSpotId = (_, props) => {
  return props.params.id;
};

const selectSpotList = (state) => {
  return state.getIn(['home', 'spotData', 'repositories']);
}

const selectSpot = createSelector(
  [
    selectSpotList,
    selectSpotId,
  ],
  (spots, id) => {
    if (spots) {
      return spots.filter((spot) => spot.id == id)[0];
    } else {
      return {};
    }
  }
);

const selectSpots = () => createSelector(
  selectHome(),
  (state) => state.getIn(['spotData', 'repositories'])
);

const selectLoading = () => createSelector(
  selectHome(),
  (state) => state.get('loading')
);

const selectError = () => createSelector(
  selectHome(),
  (state) => state.get('error')
);

export {
  selectSpot,
  selectSpots,
  selectLoading,
  selectError,
};
