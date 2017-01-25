/**
*
* SpotCrown
*
*/

import React from 'react';

import SpotCard from 'components/SpotCard';
import Ul from './ul';

class SpotCrown extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { spots, onShowSpot } = this.props;

    let content = (<div></div>);

    if (spots !== false) {
      content = spots.map((spot, index) => (
        <SpotCard key={`spot-${index}`} spot={spot} onShowSpot={onShowSpot} />
      ));
    }

    return (
      <Ul>
        {content}
      </Ul>
    );
  }
}

SpotCrown.propTypes = {
  spots: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onShowSpot: React.PropTypes.func,
};

export default SpotCrown;
