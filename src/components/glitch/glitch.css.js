import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { secondary, tfBlue, tfYellow } from 'constants/theme';

export const GlitchText = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 1.2;
  position: relative;
  padding: 0 30px;

  &.home:before,
  &.home:after {
    content: 'Move Bak';
    padding-right: 0;
  }

  &.team:before,
  &.team:after {
    content: 'From Gamers to Creators';
    padding-right: 0;
  }

  &:before,
  &:after {
    padding: 30px;
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${secondary};
    overflow: hidden;
    top: 0;
    padding: 0 30px;
  }
  &:before {
    left: 3px;
    text-shadow: -2px 0 ${tfYellow};
    animation-name: glitch-animation-1;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }
  &:after {
    left: -3px;
    text-shadow: -2px 0 ${tfBlue};
    animation-name: glitch-animation-2;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  ${MEDIA.TABLET`
    font-size: 3.2rem;
  `};

  @keyframes glitch-animation-1 {
    0% {
      clip: rect(65px, 350px, 39px, 30px);
    }
    5% {
      clip: rect(23px, 350px, 118px, 30px);
    }
    10% {
      clip: rect(106px, 350px, 89px, 30px);
    }
    15% {
      clip: rect(38px, 350px, 122px, 30px);
    }
    20% {
      clip: rect(11px, 350px, 142px, 30px);
    }
    25% {
      clip: rect(80px, 350px, 109px, 30px);
    }
    30% {
      clip: rect(17px, 350px, 86px, 30px);
    }
    35% {
      clip: rect(111px, 350px, 38px, 30px);
    }
    40% {
      clip: rect(107px, 350px, 19px, 30px);
    }
    45% {
      clip: rect(81px, 350px, 20px, 30px);
    }
    50% {
      clip: rect(141px, 350px, 8px, 30px);
    }
    55% {
      clip: rect(21px, 350px, 32px, 30px);
    }
    60% {
      clip: rect(54px, 350px, 12px, 30px);
    }
    65% {
      clip: rect(36px, 350px, 106px, 30px);
    }
    70% {
      clip: rect(82px, 350px, 91px, 30px);
    }
    75% {
      clip: rect(9px, 350px, 59px, 30px);
    }
    80% {
      clip: rect(3px, 350px, 113px, 30px);
    }
    85% {
      clip: rect(66px, 350px, 148px, 30px);
    }
    90% {
      clip: rect(137px, 350px, 34px, 30px);
    }
    95% {
      clip: rect(122px, 350px, 51px, 30px);
    }
    100% {
      clip: rect(35px, 350px, 25px, 30px);
    }
  }
  @keyframes glitch-animation-2 {
    0% {
      clip: rect(55px, 350px, 34px, 30px);
    }
    5% {
      clip: rect(111px, 350px, 135px, 30px);
    }
    10% {
      clip: rect(135px, 350px, 132px, 30px);
    }
    15% {
      clip: rect(42px, 350px, 40px, 30px);
    }
    20% {
      clip: rect(54px, 350px, 83px, 30px);
    }
    25% {
      clip: rect(142px, 350px, 56px, 30px);
    }
    30% {
      clip: rect(74px, 350px, 117px, 30px);
    }
    35% {
      clip: rect(61px, 350px, 107px, 30px);
    }
    40% {
      clip: rect(41px, 350px, 52px, 30px);
    }
    45% {
      clip: rect(33px, 350px, 59px, 30px);
    }
    50% {
      clip: rect(75px, 350px, 11px, 30px);
    }
    55% {
      clip: rect(128px, 350px, 118px, 30px);
    }
    60% {
      clip: rect(115px, 350px, 1px, 30px);
    }
    65% {
      clip: rect(105px, 350px, 138px, 30px);
    }
    70% {
      clip: rect(128px, 350px, 22px, 30px);
    }
    75% {
      clip: rect(97px, 350px, 59px, 30px);
    }
    80% {
      clip: rect(25px, 350px, 150px, 30px);
    }
    85% {
      clip: rect(122px, 350px, 63px, 30px);
    }
    90% {
      clip: rect(115px, 350px, 83px, 30px);
    }
    95% {
      clip: rect(64px, 350px, 53px, 30px);
    }
    100% {
      clip: rect(82px, 350px, 82px, 30px);
    }
  }
`;

export const Container = styled.div`
  margin-left: -30px;
`;
