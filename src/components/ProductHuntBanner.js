import React from 'react';
import { Flex, Button, Box } from 'rebass';

import logOutboundLink from '../utils/log-outbound-link';
import Container from './Container';
import Text from './Text';

function ProductHuntBanner() {
  return (
    <Flex color="gray1" bg="gray9" py={[5, 5, 5, 3]}>
      <Container>
        <Flex align="center" direction={['column', 'column', 'column', 'row']}>
          <Text
            is="span"
            aria-hidden="true"
            mr={[0, 0, 0, 4]}
            mb={[1, 1, 1, 0]}
            f={[4, 4, 4, 3]}
          >
            🙌
          </Text>
          <Text
            mb={[4, 4, 4, 0]}
            lineHeight="normal"
            align={['center', 'center', 'center', 'left']}
          >
            Help Feather win “Side Project of the Year” on Product Hunt!
          </Text>
          <Box mx="auto" />
          <Flex flex="0 0 auto">
            <Button
              is="a"
              href="https://www.producthunt.com/golden-kitty-awards-2017/#sideproject"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logOutboundLink('upvote on product hunt')}
              bg="#da552f"
            >
              Upvote on Product Hunt
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default ProductHuntBanner;
