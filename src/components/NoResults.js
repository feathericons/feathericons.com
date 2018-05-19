import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import { radius } from '../theme'
import Text from './Text'

const propTypes = {
  value: string,
}

const defaultProps = {
  value: '',
}

const Rounded = styled(Flex)`
  border-radius: ${radius}px;
`

const BreakWord = styled(Text)`
  word-break: break-word;
`

function NoResults({ value }) {
  return (
    <Rounded direction="column" align="center" bg="gray0" px={6} py={7}>
      <BreakWord f={3} lineHeight="normal" color="gray8" center>
        No results found {value && `for "${value}"`}
      </BreakWord>
    </Rounded>
  )
}

NoResults.propTypes = propTypes
NoResults.defaultProps = defaultProps

export default NoResults
