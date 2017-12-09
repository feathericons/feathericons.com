import React from 'react';

import Container from '../components/Container';
import Masthead from '../components/Masthead';
import IconSearch from '../components/IconSearch';

function IndexPage() {
  return (
    <Container>
      <Masthead py={7} />
      <IconSearch />
    </Container>
  );
}

export default IndexPage;
