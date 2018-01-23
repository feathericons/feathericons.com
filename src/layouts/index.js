import React from 'react';
import { func, shape, string } from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';

import theme from '../theme';
import ProductHuntBanner from '../components/ProductHuntBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const propTypes = {
  children: func.isRequired,
  data: shape({
    site: shape({
      siteMetadata: shape({
        title: string,
        description: string,
        siteUrl: string,
      }),
    }),
  }).isRequired,
};

/* eslint-disable no-unused-expressions */

injectGlobal`
  *,
  *:before,
  *:after {
    transition: inherit;
  }

  body {
    margin: 0;
    transition: color 0.15s, background-color 0.15s, box-shadow 0.15s;
  }

  a {
    text-decoration: none;
  }
`;

/* eslint-enable no-unused-expressions */

function Template({
  children,
  data: { site: { siteMetadata: { title, description, siteUrl } } },
}) {
  return (
    <Provider theme={theme}>
      <div>
        <Helmet>
          <title>{title}</title>

          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={`${siteUrl}/feather-og.png`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@colebemis" />

          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
        </Helmet>
        <ProductHuntBanner />
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
        siteUrl
      }
    }
  }
`;
