import React from 'react';
import Helmet from 'react-helmet';
import { Heading } from 'rebass';

import Container from '../components/Container';
import Text from '../components/Text';

function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <Container py={7}>
        <Heading is="h1" mb={4} f={6} center color="gray9">
          Oops.
        </Heading>
        <Text f={4} center lineHeight="normal" color="gray8">
          We couldn&apos;t find what you were looking for.
        </Text>
      </Container>
    </div>
  );
}

export default NotFoundPage;
