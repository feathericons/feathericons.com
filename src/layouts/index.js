import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';

import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

/* eslint-disable no-unused-expressions */

injectGlobal`
  body {
    margin: 0;
  }

  a {
    color: 'inherit';
    text-decoration: none;
  }
`;

/* eslint-enable no-unused-expressions */

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
        <Footer />
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
