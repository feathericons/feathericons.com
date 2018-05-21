import { version } from 'feather-icons/package.json'
import GatsbyLink from 'gatsby-link'
import Hide from 'hidden-styled'
import React from 'react'
import { Button } from 'rebass'
import logOutboundLink from '../utils/log-outbound-link'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Link from './Link'
import Text from './Text'

const HeaderLink = props => <Link ml={[4, 5]} {...props} />

function Header() {
  return (
    <Box py={5} borderBottom="1px solid" borderColor="gray2">
      <Container>
        <Flex alignItems="center">
          <Text is={GatsbyLink} to="/" f={4} color="gray9">
            Feather
          </Text>

          <Button
            is="a"
            href="https://github.com/feathericons/feather/releases"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logOutboundLink('release notes')}
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
                'Feather – Simply beautiful open source icons by @colebemis https://feathericons.com',
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logOutboundLink('tweet')}
            >
              Tweet
            </HeaderLink>

            <HeaderLink
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=G6CPFZ6PQRZW8&amp;lc=US&amp;item_name=Feather&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logOutboundLink('donate')}
            >
              Donate
            </HeaderLink>

            <HeaderLink
              href="https://github.com/feathericons/feather#feather"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logOutboundLink('usage')}
            >
              Usage
            </HeaderLink>
          </Hide>

          <HeaderLink
            href="https://github.com/feathericons/feather"
            target="_blank"
            rel="noopener noreferrer"
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
