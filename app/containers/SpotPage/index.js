/*
 *
 * SpotPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { loadSpots } from '../HomePage/actions';
import { selectSpot } from '../HomePage/selectors';

import DetailCover from 'components/DetailCover';
import DetailText from 'components/DetailText';
import DetailMap from 'components/DetailMap';

export class SpotPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onLoadSpots();
  }

  render() {
    const { spot } = this.props;

    let address, lat, long;

    if (spot.location) {
      ({ address, lat, long } = spot.location);
    }

    return (
      <div>
        <DetailCover title={spot.title} sources={spot.pictures} />
        <DetailText title="説明" text={spot.description} />
        <DetailMap label={spot.title} address={address} lat={lat} long={long} />
      </div>
    );
  }
}

SpotPage.propTypes = {
  params: React.PropTypes.object,
  spot: React.PropTypes.object,
  onLoadSpots: React.PropTypes.func,
};

const mapStateToProps = (state, props) => {
  return {
    spot: selectSpot(state, props),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onLoadSpots: () => dispatch(loadSpots()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotPage);
