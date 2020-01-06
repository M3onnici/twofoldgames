import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Content = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'xlarge':
        return '700';
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xlarge':
        return '4.2rem';
      case 'large':
        return '3.2rem';
      case 'medium':
        return '2.6rem';
      case 'small':
        return '1.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xlarge':
          return '3.2rem';
        case 'large':
          return '2.2rem';
        case 'medium':
          return '1.6rem';
        case 'small':
          return '1.1rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
