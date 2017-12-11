import React from 'react';
import { version } from 'feather-icons/package.json';
import { Heading, Border, Box, Flex, Button } from 'rebass';
import Hide from 'hidden-styled';

import Container from './Container';
import Link from './Link';

const HeaderLink = props => <Link ml={[4, 5]} {...props} />;

function Header() {
  return (
    <Border bottom py={4}>
      <Container>
        <Flex align="center">
          <Heading is="h1" f={4} color="gray9">
            Feather
          </Heading>

          <Button
            is="a"
            href="https://github.com/feathericons/feather/releases"
            target="_blank"
            ml={2}
            py={1}
            px={2}
            color="gray8"
            bg="gray1"
          >
            v{version}
          </Button>

          <Box mx="auto" />

          <Hide xs>
            <HeaderLink
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                'Feather – Simply beautiful open source icons by @colebemis https://feathericons.com'
              )}`}
              target="_blank"
            >
              Tweet
            </HeaderLink>

            <HeaderLink
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=G6CPFZ6PQRZW8&amp;lc=US&amp;item_name=Feather&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
              target="_blank"
            >
              Donate
            </HeaderLink>
          </Hide>

          <HeaderLink href="https://github.com/feathericons/feather#feather">
            Usage
          </HeaderLink>

          <HeaderLink href="https://github.com/feathericons/feather">
            GitHub
          </HeaderLink>
        </Flex>
      </Container>
    </Border>
  );
}

export default Header;
