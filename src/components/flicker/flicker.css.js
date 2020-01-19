import styled from 'styled-components';
import { secondary } from 'constants/theme';

export const Text = styled.strong`
  color: ${secondary};
  position: relative;

  &:before {
    content: attr(data-heading);
    position: absolute;
    overflow: hidden;
    color: white;
    width: 100%;
    z-index: 5;
    text-shadow: none;
    left: 0%;
    text-align: left;
    animation: flicker 3s linear infinite;
  }

  @keyframes flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.99;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    69.999% {
      opacity: 0.4;
      text-shadow: none;
    }
  }
`;
