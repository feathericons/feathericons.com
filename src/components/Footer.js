import React from 'react';
import { Flex } from 'rebass';

import Link from './Link';

function Footer() {
  return (
    <Flex is="footer" direction="column" align="center" py={7}>
      <Link href="https://twitter.com/colebemis" target="_blank">
        Made by @colebemis
      </Link>
    </Flex>
  );
}

export default Footer;
