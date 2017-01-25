/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { loadSpots } from './actions';
import { selectSpots } from './selectors';

import SpotCrown from 'components/SpotCrown';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onLoadSpots();
  }

  render() {
    const { spots, onShowSpot } = this.props;

    return (
      <div>
        <SpotCrown spots={spots} onShowSpot={onShowSpot} />
      </div>
    );
  }
}

HomePage.propTypes = {
  spots: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onLoadSpots: React.PropTypes.func,
  onShowSpot: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  spots: selectSpots(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadSpots: () => dispatch(loadSpots()),
    onShowSpot: (id) => dispatch(push(`/spots/${id}`)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
