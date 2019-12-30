import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Item = ({ link, image }) => (
  <Link to={link}>
    <img src={image.publicURL} alt="" />
  </Link>
);

Item.propTypes = {
  link: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
