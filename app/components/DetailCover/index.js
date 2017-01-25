/**
*
* DetailCover
*
*/

import React from 'react';

import Cover from './cover';
import H1 from './h1';

class DetailCover extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title } = this.props;

    let picture;

    if (this.props.sources) {
      picture = this.props.sources[0];
    }

    return (
      <Cover coverImage={picture}>
        <H1>{title}</H1>
      </Cover>
    );
  }
}

DetailCover.propTypes = {
  title: React.PropTypes.string,
  sources: React.PropTypes.array,
};

export default DetailCover;
