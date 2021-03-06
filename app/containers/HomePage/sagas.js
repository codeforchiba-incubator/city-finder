import { takeLatest } from 'redux-saga';
import { take, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_SPOTS } from './constants';
import { spotsLoaded } from './actions';
import spots from './data/spots.json';

function adjustedSpots() {
  return spots.map((spot) => {
    if (Object.prototype.hasOwnProperty.call(spot, 'pictures') && spot.pictures.length > 0) {
      // eslint-disable-next-line no-param-reassign
      spot.pictures = spot.pictures.map((p) => {
        if (p.startsWith('http')) {
          return p;
        }

        return `http://drive.google.com/uc?export=view&id=${p}`;
      });
    }

    return spot;
  });
}

export function* loadSpots() {
  yield put(spotsLoaded(adjustedSpots()));
}

export function* loadSpotsWatcher() {
  yield fork(takeLatest, LOAD_SPOTS, loadSpots);
}

export function* spotData() {
  const watcher = yield fork(loadSpotsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  spotData,
];
