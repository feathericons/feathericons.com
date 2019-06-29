import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import theme from '../theme'

function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: `${theme.space[9]} ${theme.space[5]}`,
          borderTop: `1px solid ${theme.colors.gray[2]}`,
        }}
      >
        <h1
          css={{
            margin: 0,
            fontSize: theme.fontSizes[6],
            fontWeight: theme.fontWeights.normal,
            textAlign: 'center',
          }}
        >
          Page not found
        </h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage
