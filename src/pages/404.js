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
          paddingY: 9,
          paddingX: 5,
        }}
      >
        <h1
          sx={{
            margin: 0,
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
