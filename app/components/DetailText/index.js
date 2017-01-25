/**
*
* DetailText
*
*/

import React from 'react';

import H1 from './h1';
import P from './p';

class DetailText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, text } = this.props;

    return (
      <section>
        <H1>{title}</H1>
        <P>{text}</P>
      </section>
    );
  }
}

DetailText.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default DetailText;
