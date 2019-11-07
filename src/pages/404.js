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
          paddingY: 9,
          paddingX: 5,
          margin: 0,
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
