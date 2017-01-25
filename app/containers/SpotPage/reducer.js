import { fromJS } from 'immutable';
import {
  LOAD_SPOT,
  LOAD_SPOT_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  spotData: false,
});

function spotPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPOT:
      return state
              .set('loading', true)
              .set('spotData', false);
    case LOAD_SPOT_SUCCESS:
      return state
              .set('loading', false)
              .set('spotData', action.spot);
    default:
      return state;
  }
}

export default spotPageReducer;
