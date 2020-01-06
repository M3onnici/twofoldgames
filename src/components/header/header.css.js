import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  padding: 4rem;
  ${MEDIA.TABLET`
    position: relative;
  `};

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
      width: 200px;
      margin: 0 auto;

      ${MEDIA.TABLET`
        width: 150px;
      `};
    }
  }
`;
