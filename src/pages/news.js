import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import Articles from 'components/articles';

const News = ({ data }) => (
  <Layout>
    <Head pageTitle={data.newsJson.title} />
    <Box>
      <Title as="h3" size="large">
        {data.newsJson.title}
      </Title>
      <div style={{ height: '10vh' }} />
      <Articles items={data.newsJson.news} />
    </Box>
    <div style={{ height: '20vh' }} />
  </Layout>
);

News.propTypes = {
  data: PropTypes.object.isRequired,
};

export default News;

export const query = graphql`
  query NewsQuery {
    newsJson {
      title
      news {
        title
        date
        link
        content {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`;
