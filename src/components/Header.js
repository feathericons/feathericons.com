import { version } from 'feather-icons/package.json'
import GatsbyLink from 'gatsby-link'
import React from 'react'
import logOutboundLink from '../utils/log-outbound-link'
import Box from './Box'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'
import Link from './Link'

const HeaderLink = props => (
  <Link target="_blank" rel="noopener noreferrer" ml={[4, 5]} {...props} />
)

function Header() {
  return (
    <Box py={5} borderBottom="1px solid" borderColor="gray2">
      <Container>
        <Flex alignItems="center">
          <Link is={GatsbyLink} to="/" fontSize={4}>
            Feather
          </Link>

          <Button
            is="a"
            href="https://github.com/feathericons/feather/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logOutboundLink('release notes')}
            ml={2}
            py={1}
            px={2}
            fontSize={1}
            color="gray8"
            bg="gray1"
          >
            v{version}
          </Button>

          <Box mx="auto" />

          <Box display={['none', 'block']}>
            <HeaderLink
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                'Feather – Simply beautiful open source icons by @colebemis https://feathericons.com',
              )}`}
              onClick={() => logOutboundLink('tweet')}
            >
              Tweet
            </HeaderLink>

            <HeaderLink
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=G6CPFZ6PQRZW8&amp;lc=US&amp;item_name=Feather&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
              onClick={() => logOutboundLink('donate')}
            >
              Donate
            </HeaderLink>

            <HeaderLink
              href="https://github.com/feathericons/feather#feather"
              onClick={() => logOutboundLink('usage')}
            >
              Usage
            </HeaderLink>
          </Box>

          <HeaderLink
            href="https://github.com/feathericons/feather"
            onClick={() => logOutboundLink('github')}
          >
            GitHub
          </HeaderLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
