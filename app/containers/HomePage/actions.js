import {
  LOAD_SPOTS,
  LOAD_SPOTS_SUCCESS,
} from './constants';

export function loadSpots() {
  return {
    type: LOAD_SPOTS,
  };
}

export function spotsLoaded(spots) {
  return {
    type: LOAD_SPOTS_SUCCESS,
    spots,
  };
}
