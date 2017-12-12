import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Heading, Text as BaseText } from 'rebass';

import Container from '../components/Container';

const Text = styled(BaseText)`
  line-height: 1.5;
`;

function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found | Feather</title>
      </Helmet>
      <Container py={7}>
        <Heading is="h1" mb={4} f={6} color="gray9" center>
          Oops.
        </Heading>
        <Text f={4} color="gray8" center>
          We couldn&apos;t find what you were looking for.
        </Text>
      </Container>
    </div>
  );
}

export default NotFoundPage;
