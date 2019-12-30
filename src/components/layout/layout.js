import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children }) => (
  <>
    <GlobalStyle />
    <Head />
    <Header
      title={data.site.siteMetadata.siteTitle}
      logoText={data.homeJson.logoText}
    />
    {children}
    <Footer
      copyright={data.genericJson.footer.copyright}
      logo={data.genericJson.logoSymbol}
      items={data.genericJson.socialMedia}
      content={data.genericJson.footer.content.childMarkdownRemark.html}
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        homeJson {
          logoText {
            childImageSharp {
              fluid(maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        genericJson {
          logoSymbol {
            childImageSharp {
              fluid(maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          footer {
            content {
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
            copyright
          }
          socialMedia {
            link
            image {
              publicURL
              extension
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
