import styled from 'styled-components';

const Wrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }

  display: flex;
  background-color: #fafafa;
  min-height: 100%;
  flex-direction: column;
`;

export default Wrapper;
