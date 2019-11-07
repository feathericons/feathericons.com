/** @jsx jsx */
import Helmet from 'react-helmet'
import { jsx } from 'theme-ui'
import Layout from '../components/Layout'

function NotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 9,
          px: 5,
          borderTop: '1px solid',
          borderColor: 'border',
        }}
      >
        <h1
          css={{
            m: 0,
            fontSize: 6,
            fontWeight: 'normal',
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
