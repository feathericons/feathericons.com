import React from 'react'
import { Image } from 'rebass'
import stdlib from '../images/stdlib-logo.svg'
import logDownload from '../utils/logDownload'
import logOutboundLink from '../utils/logOutboundLink'
import BlockLink from './BlockLink'
import Button from './Button'
import Flex from './Flex'
import Text from './Text'
import Heading from './Heading'

function Masthead() {
  return (
    <Flex flexDirection="column" alignItems="center" py={7}>
      <Heading mb={5} textAlign="center">
        Simply beautiful open source icons
      </Heading>

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
