import React from 'react'
import logOutboundLink from '../utils/logOutboundLink'
import Flex from './Flex'
import Link from './Link'

function Footer() {
  return (
    <Flex is="footer" flexDirection="column" alignItems="center" py={7}>
      <Link
        href="https://twitter.com/colebemis"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logOutboundLink('made by @colebemis')}
      >
        Made by @colebemis
      </Link>
    </Flex>
  )
}

export default Footer
