import React from 'react';
import { icons } from 'feather-icons';

import Container from '../components/Container';
import Masthead from '../components/Masthead';
import IconGrid from '../components/IconGrid';
import IconSearch from '../components/IconSearch';

function IndexPage() {
  return (
    <Container>
      <Masthead py={7} />
      <IconSearch />
      <IconGrid icons={Object.keys(icons)} py={5} />
    </Container>
  );
}

export default IndexPage;
