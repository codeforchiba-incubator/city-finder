/**
*
* DetailMap
*
*/

import React from 'react';

import { Marker, TileLayer } from 'react-leaflet';
import StyledMap from './styled-map';

class DetailMap extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const position = [ this.props.lat, this.props.long ];
    const { label, address } = this.props;
    let content = (<div></div>);

    if (label) {
      content = (
        <StyledMap center={position} zoom={15}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} />
        </StyledMap>
      );
    }

    return content;
  }
}

DetailMap.propTypes = {
  label: React.PropTypes.string,
  address: React.PropTypes.string,
  lat: React.PropTypes.number,
  long: React.PropTypes.number,
};

export default DetailMap;
