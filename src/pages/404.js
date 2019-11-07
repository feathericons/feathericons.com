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
      <h1
        sx={{
          py: 9,
          px: 5,
          m: 0,
          fontSize: 6,
          fontWeight: 'normal',
          textAlign: 'center',
        }}
      >
        Page not found
      </h1>
    </Layout>
  )
}

export default NotFoundPage
