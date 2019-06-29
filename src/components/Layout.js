import { graphql, useStaticQuery } from 'gatsby'
import { node } from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyles from './GlobalStyles'
import Header from './Header'

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://feathericons.com/feather-og.png"
        />
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
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
