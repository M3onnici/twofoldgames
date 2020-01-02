import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Item = ({ link, image, text }) => (
  <div>
    <Link to={link}>
      <img src={image.publicURL} alt="" />
    </Link>
    <span>{text}</span>
  </div>
);

Item.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
