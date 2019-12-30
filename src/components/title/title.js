import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small']),
};

export default Title;
