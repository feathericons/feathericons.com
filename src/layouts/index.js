import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';

import './index.css';
import theme from '../theme';
import Header from '../components/Header';

injectGlobal`
  body {
    margin: 0;
  }

  a {
    color: 'inherit';
    text-decoration: none;
  }
`;

const propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};

function Template({
  children,
  data: { site: { siteMetadata: { title, description } } },
}) {
  return (
    <Provider theme={theme}>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header />
        {children()}
      </div>
    </Provider>
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
