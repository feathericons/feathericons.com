import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import IconGrid from '../components/IconGrid';

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

function IndexPage() {
  return (
    <Container width={0.85}>
      <IconGrid />
    </Container>
  );
}

export default IndexPage;
