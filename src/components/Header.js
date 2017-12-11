import React from 'react';
import { version } from 'feather-icons/package.json';
import { Text, Border, Box, Flex } from 'rebass';
import Hide from 'hidden-styled';

import Container from './Container';
import Link from './Link';

const HeaderLink = props => <Link ml={[3, 4]} {...props} />;

function Header() {
  return (
    <Border bottom py={3} color="gray2">
      <Container>
        <Flex align="center">
          <Text is="h1" f={4} color="gray9">
            Feather
            <Text is="span" ml={2} f={2} color="gray7">
              v{version}
            </Text>
          </Text>

          <Box mx="auto" />

          <Hide xs>
            <HeaderLink
              href="https://twitter.com/intent/tweet?text=Feather%20-%20Simply%20beautiful%20open%20source%20icons%20by%20%40colebemis%20https://feathericons.com"
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
