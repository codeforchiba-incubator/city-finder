import styled from 'styled-components';

const Cover = styled.div`
  position: relative;

  height: 200px;
  background: center / cover;
  background-image: url(${(props) => props.coverImage});
`;

export default Cover;
