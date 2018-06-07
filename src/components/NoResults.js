import { string } from 'prop-types'
import React from 'react'
import Flex from './Flex'
import Text from './Text'

const BreakWord = Text.extend({
  wordBreak: 'break-word',
})

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
      <BreakWord width={1} fontSize={3} color="gray8" textAlign="center">
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
