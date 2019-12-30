import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './downloadLinks.css';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const DownloadLinks = ({
  appStoreLink,
  googlePlayLink,
  appStoreBtn,
  googlePlayBtn,
}) => (
  <Container>
    <Link to={appStoreLink}>
      <img src={appStoreBtn} alt="App Store" />
    </Link>
    <Link to={googlePlayLink}>
      <Img
        fluid={googlePlayBtn ? googlePlayBtn.childImageSharp.fluid : {}}
        alt="Google Play"
      />
    </Link>
  </Container>
);

DownloadLinks.propTypes = {
  appStoreLink: PropTypes.string.isRequired,
  googlePlayLink: PropTypes.string.isRequired,
  appStoreBtn: PropTypes.string.isRequired,
  googlePlayBtn: PropTypes.object.isRequired,
};

export default DownloadLinks;
