/**
*
* DetailText
*
*/

import React from 'react';

import P from './p';

class DetailText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, text } = this.props;

    return (
      <section>
        <P>{title}</P>
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
