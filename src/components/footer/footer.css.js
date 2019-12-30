import styled from 'styled-components';
import { primary, secondary } from 'constants/theme';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${secondary};
    cursor: pointer;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
    > div {
      width: 30px;
      margin-bottom: 2rem;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: ${primary};
  background: #fff;
  width: 100%;

  .icons {
    display: flex;
    justify-content: space-between;
    a {
      flex: 1 1;
      padding: 1rem;
    }
  }
`;

export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 0 2rem;

  p {
    margin-top: 0;
  }
`;
