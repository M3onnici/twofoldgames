import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, logoText }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Img
          fluid={logoText ? logoText.childImageSharp.fluid : {}}
          alt={title}
        />
        <Title as="h1">{title}</Title>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoText: PropTypes.object.isRequired,
};

export default Header;
