import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const Header = ({ title, logoText }) => (
  <Container>
    <Link to="/">
      <Img fluid={logoText ? logoText.childImageSharp.fluid : {}} alt={title} />
      <Title as="h1">{title}</Title>
    </Link>
    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoText: PropTypes.object.isRequired,
};

export default Header;
