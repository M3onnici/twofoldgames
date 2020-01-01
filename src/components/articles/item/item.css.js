import styled from 'styled-components';
import { primary, secondary } from 'constants/theme';

export const Container = styled.div`
  h2 {
    font-weight: 700;
  }
  > span {
    color: ${primary};
    margin-bottom: 2rem;
  }
  > div {
    margin-bottom: 2rem;
  }
  
`;

export const ReadMore = styled.a`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.2;
`;
