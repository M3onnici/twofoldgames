import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from 'components/title';
import Text from 'components/text';
import Members from 'components/members';

const Team = ({ data }) => (
  <Layout>
    <Head pageTitle={data.teamJson.title} />
    <div style={{ height: '20vh' }} />
    <Box>
      <Title as="h3" size="large">
        {data.teamJson.title}
      </Title>
      <Text as="div" size="medium">
        <p>{data.teamJson.content.childMarkdownRemark.rawMarkdownBody}</p>
      </Text>
      <div style={{ height: '10vh' }} />
      <Members items={data.teamJson.members} />
    </Box>
    <div style={{ height: '20vh' }} />
  </Layout>
);

Team.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Team;

export const query = graphql`
  query TeamQuery {
    teamJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      members {
        name
        role
        image {
          publicURL
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
