import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Name, Role, Container } from './item.css';

const AnimatedContainer = posed.div({
  enter: {
    x: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-20%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Item = ({ name, role, image }) => (
  <AnimatedContainer>
    <Container>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={name} />
      <Name as="h2">{name}</Name>
      <Role as="div">{role}</Role>
    </Container>
  </AnimatedContainer>
);

Item.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
