import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/socialMedia/item';
import { Container } from './socialMedia.css';

const SocialMedia = ({ items }) => (
  <Container>
    <div className="icons">
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </div>
  </Container>
);

SocialMedia.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocialMedia;
