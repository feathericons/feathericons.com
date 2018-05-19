import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Button, Truncate } from 'rebass'
import Flex from './Flex'
import { colors, shadows } from '../theme'
import Icon from './Icon'

const propTypes = {
  name: string.isRequired,
}

const IconButton = styled(Button)`
  cursor: pointer;
  text-align: left;
  line-height: 1.5;

  &:hover {
    background-color: ${colors.white};
    box-shadow: ${shadows.medium};
  }

  &:focus {
    box-shadow: ${shadows.outline};
  }
`

function IconTile({ name, ...props }) {
  return (
    <IconButton id={name} px={5} py={5} color="gray9" bg="gray0" {...props}>
      <Flex alignItems="center">
        <Icon name={name} color={colors.gray9} />
        <Truncate ml={4} fontSize={2}>
          {name}
        </Truncate>
      </Flex>
    </IconButton>
  )
}

IconTile.propTypes = propTypes

export default IconTile
