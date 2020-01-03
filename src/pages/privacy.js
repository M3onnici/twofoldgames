import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Text from 'components/text';
import Head from 'components/head';

const Privacy = ({ data }) => (
  <Layout>
    <Head pageTitle={data.privacyJson.title} />
    <Box>
      <Title as="h3" size="large">
        {data.privacyJson.title}
      </Title>
      <div style={{ height: '5vh' }} />
      <Text as="div" size="small">
        <div
          dangerouslySetInnerHTML={{
            __html: data.privacyJson.content.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Box>
    <div style={{ height: '10vh' }} />
  </Layout>
);

Privacy.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Privacy;

export const query = graphql`
  query PrivacyQuery {
    privacyJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
