import { string } from 'prop-types'
import React from 'react'
import { Truncate } from 'rebass'
import { colors } from '../theme'
import Button from './Button'
import Flex from './Flex'
import Icon from './Icon'

function IconTile({ name, ...props }) {
  return (
    <Button
      id={name}
      px={5}
      py={5}
      fontWeight="normal"
      textAlign="left"
      color="gray9"
      bg="gray0"
      hover={{ backgroundColor: 'white' }}
      focus={{ outline: 0, boxShadow: `0 0 0 3px ${colors.base}` }}
      {...props}
    >
      <Flex alignItems="center">
        <Icon name={name} color="gray9" />
        <Truncate ml={4} fontSize={2}>
          {name}
        </Truncate>
      </Flex>
    </Button>
  )
}

IconTile.propTypes = {
  name: string.isRequired,
}

export default IconTile
