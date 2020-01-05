import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  margin: 2rem 0;
  align-items: center;
  justify-content: space-evenly;

  ${MEDIA.TABLET`
    display: block;
  `};

  .gatsby-image-wrapper {
    max-width: 300px;
    min-width: 200px;
  }
`;
