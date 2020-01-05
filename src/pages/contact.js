import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Text from 'components/text';
import Head from 'components/head';
import SocialMedia from 'components/socialMedia';

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Box>
      <Title as="h3" size="large">
        {data.contactJson.title}
      </Title>
      <div style={{ height: '5vh' }} />
      <Title as="h2" size="large">
        {data.contactJson.contactUsTitle}
      </Title>
      <Text as="div">
        <div
          dangerouslySetInnerHTML={{
            __html: data.contactJson.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <div style={{ height: '10vh' }} />
    <Box>
      <Title as="h2" size="large">
        {data.contactJson.socialMediaTitle}
      </Title>
      <SocialMedia items={data.contactJson.socialMedia} />
    </Box>
    <div style={{ height: '10vh' }} />
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      socialMediaTitle
      contactUsTitle
      content {
        childMarkdownRemark {
          html
        }
      }
      socialMedia {
        link
        text
        image {
          publicURL
          extension
        }
      }
    }
  }
`;
