import {
  LOAD_SPOT,
  LOAD_SPOT_SUCCESS,
} from './constants';

export function loadSpot() {
  return {
    type: LOAD_SPOT,
  };
}

export function spotLoaded(spot) {
  return {
    type: LOAD_SPOT_SUCCESS,
    spot,
  };
}
