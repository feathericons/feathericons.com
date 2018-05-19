import { func, shape, string } from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../globalCss'
import theme from '../theme'

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
}

function Template({
  children,
  data: { site: { siteMetadata: { title, description, siteUrl } } },
}) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <html lang="en" />

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
        <Header />
        <main>{children()}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Template.propTypes = propTypes

export default Template

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
`
