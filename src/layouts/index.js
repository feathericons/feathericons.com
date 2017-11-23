import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import './index.css';
import theme from '../theme';
import Header from '../components/Header';

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
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header />
        {children()}
      </div>
    </ThemeProvider>
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
