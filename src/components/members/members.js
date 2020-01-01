import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/members/item';
import { Container, Team } from './members.css';

const Members = ({ items }) => (
  <Container>
    <Team>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Team>
  </Container>
);

Members.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Members;
