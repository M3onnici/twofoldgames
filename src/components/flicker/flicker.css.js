import styled from 'styled-components';
import { secondary, tfBlue, tfYellow } from 'constants/theme';

export const Text = styled.strong`
  color: ${secondary};
  position: relative;

  &:before {
		content: attr(data-heading);
		position: absolute;
		overflow: hidden;
		color: ${tfYellow};
		width: 100%;
		z-index: 5;
		text-shadow: none;
		left: 0%;
		text-align: left;
		animation: flicker 3s linear infinite;
	}


@keyframes flicker {
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		opacity: .99;
		text-shadow: -1px -1px 0 $outline, 1px -1px 0 $outline, -1px 1px 0 $outline, 1px 1px 0 $outline, 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
		text-shadow: none;
	}
}
`;