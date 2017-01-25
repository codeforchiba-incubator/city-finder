import styled from 'styled-components';

const Li = styled.li`
  position: relative;

  height: 200px;
  background: center / cover;
  background-image: url(${props => props.coverImage});
`;

export default Li;
