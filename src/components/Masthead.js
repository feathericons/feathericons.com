import React from 'react'
import { BlockLink, Image } from 'rebass'
import Button from './Button'
import stdlib from '../images/stdlib-logo.svg'
import logDownload from '../utils/logDownload'
import logOutboundLink from '../utils/logOutboundLink'
import Flex from './Flex'
import Text from './Text'

function Masthead() {
  return (
    <Flex flexDirection="column" alignItems="center" py={7}>
      <Text mb={5} lineHeight="tight" fontSize={5} textAlign="center">
        Simply beautiful open source icons
      </Text>

      <Flex width={[1, 'auto']} flexDirection={['column', 'row']}>
        <Button
          is="a"
          href="https://github.com/feathericons/feather#feather"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logOutboundLink('get started')}
          mx={[0, 2]}
          my={[2, 0]}
        >
          Get Started
        </Button>

        <Button
          is="a"
          href="/feather.zip"
          onClick={() => logDownload('all')}
          download
          mx={[0, 2]}
          my={[2, 0]}
          color="gray9"
          bg="gray1"
        >
          Download
        </Button>
      </Flex>

      <BlockLink
        href="https://stdlib.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logOutboundLink('stdlib')}
        mt={7}
      >
        <Text width={1} textAlign="center" lineHeight="none" color="gray8">
          Sponsored by
        </Text>
        <Image src={stdlib} width={112} mt={2} alt="StdLib Logo" />
      </BlockLink>
    </Flex>
  )
}

export default Masthead
