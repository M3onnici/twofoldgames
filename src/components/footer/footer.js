import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Text from 'components/text';
import { Link } from 'gatsby';
import Item from 'components/footer/item';
import { Container, SocialMedia, Signature } from './footer.css';

const Footer = ({ copyright, logo, items }) => (
  <Container>
    <SocialMedia>
      <div className="icons">
        {items.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </div>
      <Text as="div">
        <div>
          <span>Read all about the </span>
          <a href="../../BrandBook.pdf.zip">company</a>
          <span> and our </span>
          <Link to="/privacy">privacy policy</Link>
          <span> here.</span>
        </div>
      </Text>
    </SocialMedia>
    <Signature>
      <Link to="/">
        <Img
          fluid={logo ? logo.childImageSharp.fluid : {}}
          alt="twofold games"
        />
      </Link>
      <Text as="p" size="small">
        {copyright}
      </Text>
    </Signature>
  </Container>
);

Footer.propTypes = {
  content: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Footer;
