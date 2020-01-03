import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ link, image }) => (
  <a href={link}>
    <img src={image.publicURL} alt="" />
  </a>
);

Item.propTypes = {
  link: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
