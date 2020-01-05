import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';
import posed from 'react-pose';

const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Box = ({ children }) => (
  <AnimatedContainer>
    <Container>{children}</Container>
  </AnimatedContainer>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
