import React from 'react';
import PropTypes from 'prop-types';
import { Container, GlitchText } from './glitch.css';

const Glitch = ({ text, page }) => {
  return (
    <Container>
      <GlitchText className={page}>{text}</GlitchText>
    </Container>
  );
};

Glitch.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Glitch;
