/**
*
* SpotCard
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import Li from './li';
import Title from './title';
import Button from './button';

class SpotCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { spot, onShowSpot } = this.props;
    let imageUrl;

    if (spot.hasOwnProperty("pictures") && spot.pictures.length > 0) {
      imageUrl = spot.pictures[0];
    }

    return (
      <Li coverImage={imageUrl}>
        <Title>{spot.title}</Title>
        <Button onClick={() => onShowSpot(spot.id)}>
          <FontAwesome name="caret-right" />
        </Button>
      </Li>
    );
  }
}

SpotCard.propTypes = {
  spot: React.PropTypes.object,
  onShowSpot: React.PropTypes.func,
};

export default SpotCard;
