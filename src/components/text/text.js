import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './text.css';

const Text = ({ children, as = 'span', size }) => {
  return (
    <Content as={as} size={size}>
      {children}
    </Content>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small']),
};

export default Text;
