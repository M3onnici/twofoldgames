import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Title from 'components/title';
import Text from 'components/text';
import { Container, ReadMore } from './item.css';

const Item = ({ title, date, image, link, content }) => (
  <Container>
    <Title as="h2" size="large">
      {title}
    </Title>
    <Text as="span">
      {date}
    </Text>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={name} />
    <Text as="div">
      {content.childMarkdownRemark.rawMarkdownBody}
    </Text>
    {link && (
      <ReadMore as="a" href={link}>
        Read more
      </ReadMore>
    )}
    <div style={{ height: '10vh' }} />
  </Container>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  link: PropTypes.string,
};

export default Item;