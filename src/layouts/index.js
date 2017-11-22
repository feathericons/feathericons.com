import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const propTypes = {
  children: PropTypes.func.isRequired,
};

function Template({ children, data }) {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>Feather</h1>
      {children()}
    </div>
  );
}

Template.propTypes = propTypes;

export default Template;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
