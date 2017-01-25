/**
*
* Header
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from './header';
import HeaderLink from './link';
import Img from './img';
import Logo from './logo.png';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledHeader>
        <HeaderLink to="/">
          <FontAwesome name="caret-left" />
        </HeaderLink>
        <Img src={Logo} alt="City Finder" />
      </StyledHeader>
    );
  }
}

export default Header;
