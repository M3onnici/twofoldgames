import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import DownloadLinks from 'components/downloadLinks';
import Title from 'components/title';
import Text from 'components/text';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <div style={{ height: '20vh' }} />
    <Box>
      <Title as="h2" size="large">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Title>
    </Box>
    <div style={{ height: '50vh' }} />
    <Box>
      <Title as="h3" size="large">
        {data.homeJson.about.title}
      </Title>
      <Text as="div" size="medium">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.about.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <div style={{ height: '50vh' }} />
    <Box>
      <Title as="h3" size="medium">
        {data.homeJson.latest.title}
      </Title>
      <Title as="h2" size="xlarge">
        {data.homeJson.latest.game}
      </Title>
      <Text as="div" size="medium">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.latest.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <DownloadLinks
      appStoreLink={data.genericJson.appStoreLink}
      googlePlayLink={data.genericJson.googlePlayLink}
      appStoreBtn={data.genericJson.appStoreBtn.publicURL}
      googlePlayBtn={data.genericJson.googlePlayBtn}
    />
    <div style={{ height: '20vh' }} />
    {/* <IOExample /> */}
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
            fluid(maxHeight: 500, quality: 90) {
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
