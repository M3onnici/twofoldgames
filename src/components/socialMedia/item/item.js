import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ link, image, text }) => (
  <div>
    <a href={link}>
      <img src={image.publicURL} alt="" />
    </a>
    <span>{text}</span>
  </div>
);

Item.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
