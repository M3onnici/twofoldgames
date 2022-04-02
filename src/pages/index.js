import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import DownloadLinks from 'components/downloadLinks';
import Title from 'components/title';
import Text from 'components/text';
import Flicker from 'components/flicker';
import Gallery from 'components/gallery';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <div style={{ height: '20vh' }} />
    <Box>
      <Text as="div" size="large">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Text>
      <Text as="div" size="large">
        <Flicker text={'Play'} /> <i>our games</i> <Flicker text={'now'} />{' '}
        <i>on the</i> <br />
        <a href="https://apps.apple.com/mt/developer/2fold-games/id942269606">
          App Store
        </a>
        &nbsp;<i>,</i>&nbsp;
        <a href="https://play.google.com/store/apps/details?id=com.twofoldgames.movebak">
          Google Play
        </a>
      </Text>
      {/* <ScrollDown /> */}
    </Box>
    <div style={{ height: '30vh' }} />
    <Box>
      <Title as="h3" size="large">
        {data.homeJson.latest.title}
      </Title>
      <Title as="h2" size="xlarge">
        <Flicker text={data.homeJson.latest.game} />
      </Title>
      <Text as="div" size="large">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.latest.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <Link to="/movebak">
      <Gallery items={data.homeJson.gallery} />
    </Link>
    <DownloadLinks
      appStoreLink={data.genericJson.appStoreLink}
      googlePlayLink={data.genericJson.googlePlayLink}
      appStoreBtn={data.genericJson.appStoreBtn.publicURL}
      googlePlayBtn={data.genericJson.googlePlayBtn}
    />
    <div style={{ height: '30vh' }} />
    <Box>
      <Title as="h3" size="large">
        {data.homeJson.about.title}
      </Title>
      <Text as="div" size="large">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.about.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <div style={{ height: '20vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      about {
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      latest {
        title
        game
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      gallery {
        alt
        image {
          childImageSharp {
            fluid(maxHeight: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    genericJson {
      appStoreLink
      googlePlayLink
      appStoreBtn {
        publicURL
        extension
      }
      googlePlayBtn {
        childImageSharp {
          fluid(maxHeight: 300, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
