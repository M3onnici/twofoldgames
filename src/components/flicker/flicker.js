import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './flicker.css';

const Flicker = ({ text }) => {
  return <Text data-heading={text}>{text}</Text>;
};

Flicker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Flicker;
