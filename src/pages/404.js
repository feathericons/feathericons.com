import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Heading from '../components/Heading'

function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <Container pt={7}>
        <Heading textAlign="center">Page not found</Heading>
      </Container>
    </div>
  )
}

export default NotFoundPage
