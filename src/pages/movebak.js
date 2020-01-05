import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import DownloadLinks from 'components/downloadLinks';
import Title from 'components/title';
import Text from 'components/text';
import Img from 'gatsby-image';
import Gallery from 'components/gallery';
import Head from 'components/head';
import { graphql } from 'gatsby';

const MoveBak = ({ data }) => (
  <Layout>
    <Head pageTitle={data.movebakJson.title} />
    <Box>
      <Img
        fluid={
          data.movebakJson.logo
            ? data.movebakJson.logo.childImageSharp.fluid
            : {}
        }
        alt={data.movebakJson.title}
        style={{ width: '200px', margin: '0 auto', top: '112px', zindex: '9' }}
      />
      <Img
        fluid={
          data.movebakJson.firstImage
            ? data.movebakJson.firstImage.childImageSharp.fluid
            : {}
        }
        alt={data.movebakJson.title}
        style={{ width: '250px', margin: '0 auto' }}
      />
      <DownloadLinks
        appStoreLink={data.movebakJson.appStoreLink}
        googlePlayLink={data.movebakJson.googlePlayLink}
        appStoreBtn={data.genericJson.appStoreBtn.publicURL}
        googlePlayBtn={data.genericJson.googlePlayBtn}
      />
      <div style={{ height: '5vh' }} />
      <Title as="h2" size="xlarge">
        {data.movebakJson.firstParagraphTitle}
      </Title>
      <Text as="div">
        <div
          dangerouslySetInnerHTML={{
            __html: data.movebakJson.firstParagraph.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <div style={{ height: '5vh' }} />
    <Box>
      <Img
        fluid={
          data.movebakJson.secondImage
            ? data.movebakJson.secondImage.childImageSharp.fluid
            : {}
        }
        alt={data.movebakJson.title}
        style={{ width: '250px', margin: '0 auto' }}
      />
      <div style={{ height: '5vh' }} />
      <Title as="h2" size="medium">
        {data.movebakJson.secondParagraphTitle}
      </Title>
      <Text as="div">
        <div
          dangerouslySetInnerHTML={{
            __html: data.movebakJson.secondParagraph.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <Box>
      <Img
        fluid={
          data.movebakJson.thirdImage
            ? data.movebakJson.thirdImage.childImageSharp.fluid
            : {}
        }
        alt={data.movebakJson.title}
        style={{ width: '250px', margin: '0 auto' }}
      />
      <div style={{ height: '5vh' }} />
      <Title as="h2" size="medium">
        {data.movebakJson.thirdParagraphTitle}
      </Title>
      <Text as="div">
        <div
          dangerouslySetInnerHTML={{
            __html: data.movebakJson.thirdParagraph.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <Gallery items={data.movebakJson.gallery} />
    <DownloadLinks
      appStoreLink={data.movebakJson.appStoreLink}
      googlePlayLink={data.movebakJson.googlePlayLink}
      appStoreBtn={data.genericJson.appStoreBtn.publicURL}
      googlePlayBtn={data.genericJson.googlePlayBtn}
    />
    <div style={{ height: '20vh' }} />
  </Layout>
);

MoveBak.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MoveBak;

export const query = graphql`
  query MoveBakQuery {
    movebakJson {
      title
      appStoreLink
      googlePlayLink
      logo {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      firstImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      firstParagraphTitle
      firstParagraph {
        childMarkdownRemark {
          html
        }
      }
      secondImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secondParagraphTitle
      secondParagraph {
        childMarkdownRemark {
          html
        }
      }
      thirdImage {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      thirdParagraphTitle
      thirdParagraph {
        childMarkdownRemark {
          html
        }
      }
      pressKitLink
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
