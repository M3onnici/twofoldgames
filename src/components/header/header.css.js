import styled from 'styled-components';

export const Container = styled.header`
  padding: 4rem;

  h1 {
    display: none;
  }
  a {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: opacity 0.5s ease;
    }
    > div {
      width: 150px;
      margin: 0 auto;
    }
  }
`;
