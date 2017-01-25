import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  position: absolute;
  top: 8px;
  left: 12px;

  display: inline-block;

  text-decoration: none;
  cursor: pointer;
  outline: 0;

  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;

  span {
    font-size: 28px;
  }
`;
