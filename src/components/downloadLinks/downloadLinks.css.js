import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  transition: opacity 0.8s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  a {
    display: inline-block;
    width: 200px;
    margin-right: 7px;
    img {
      width: 200px;
    }
  }
`;
