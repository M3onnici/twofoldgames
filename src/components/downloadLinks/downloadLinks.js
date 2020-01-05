import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './downloadLinks.css';
import Img from 'gatsby-image';
import IO from 'components/io';

const DownloadLinks = ({
  appStoreLink,
  googlePlayLink,
  appStoreBtn,
  googlePlayBtn,
}) => (
  <IO rootMargin="-150px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
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
    )}
  </IO>
);

DownloadLinks.propTypes = {
  appStoreLink: PropTypes.string.isRequired,
  googlePlayLink: PropTypes.string.isRequired,
  appStoreBtn: PropTypes.string.isRequired,
  googlePlayBtn: PropTypes.object.isRequired,
};

export default DownloadLinks;
