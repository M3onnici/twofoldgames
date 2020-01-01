import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/articles/item';
import { Container } from './articles.css';

const Articles = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Articles.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Articles;
