import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './downloadLinks.css';
import Img from 'gatsby-image';

const DownloadLinks = ({
  appStoreLink,
  googlePlayLink,
  appStoreBtn,
  googlePlayBtn,
}) => (
  <Container>
    <a href={appStoreLink}>
      <img src={appStoreBtn} alt="App Store" />
    </a>
    <a href={googlePlayLink}>
      <Img
        fluid={googlePlayBtn ? googlePlayBtn.childImageSharp.fluid : {}}
        alt="Google Play"
      />
    </a>
  </Container>
);

DownloadLinks.propTypes = {
  appStoreLink: PropTypes.string.isRequired,
  googlePlayLink: PropTypes.string.isRequired,
  appStoreBtn: PropTypes.string.isRequired,
  googlePlayBtn: PropTypes.object.isRequired,
};

export default DownloadLinks;
