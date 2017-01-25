import expect from 'expect';
import spotPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('spotPageReducer', () => {
  it('returns the initial state', () => {
    expect(spotPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
