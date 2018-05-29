import { string } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Text from './Text'

const BreakWord = styled(Text)`
  word-break: break-word;
`

function NoResults({ value }) {
  return (
    <Flex
      direction="column"
      align="center"
      px={6}
      py={7}
      bg="gray0"
      borderRadius={1}
    >
      <BreakWord f={3} lineHeight="normal" color="gray8" center>
        No results found for &ldquo;{value}&rdquo;
      </BreakWord>
    </Flex>
  )
}

NoResults.propTypes = {
  value: string,
}

NoResults.defaultProps = {
  value: '',
}

export default NoResults
