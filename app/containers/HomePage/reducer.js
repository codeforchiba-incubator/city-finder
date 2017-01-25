import { fromJS } from 'immutable';
import {
  LOAD_SPOTS,
  LOAD_SPOTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  spotData: {
    repositories: false,
  },
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPOTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['spotData', 'repositories'], false);
    case LOAD_SPOTS_SUCCESS:
      return state
        .set('loading', false)
        .setIn(['spotData', 'repositories'], action.spots);
    default:
      return state;
  }
}

export default homePageReducer;
