import { func, string } from 'prop-types'
import React from 'react'
import { themeGet } from 'styled-system'
import system from 'system-components'
import { colors } from '../theme'
import Absolute from './Absolute'
import Flex from './Flex'
import Icon from './Icon'
import Relative from './Relative'

const Input = system(
  {
    is: 'input',
    type: 'text',
    w: 1,
    p: 4,
    fontSize: 2,
    color: 'gray9',
    lineHeight: 'none',
    border: 0,
    borderRadius: 1,
  },
  props => ({
    fontFamily: 'inherit',
    outline: 0,

    '&:focus': {
      boxShadow: `0 0 0 3px ${themeGet('colors.base')(props)}`,
    },
  }),
)

function SearchInput({ value, placeholder, label, onChange, ...props }) {
  return (
    <Relative {...props}>
      <Absolute top={0} bottom={0} left={0}>
        <Flex alignItems="center" height="100%" px={4}>
          <Icon name="search" color={colors.gray6} />
        </Flex>
      </Absolute>
      <Input
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        pl={56}
      />
    </Relative>
  )
}

SearchInput.propTypes = {
  value: string,
  placeholder: string,
  label: string,
  onChange: func,
}

SearchInput.defaultProps = {
  value: '',
  placeholder: '',
  label: '',
  onChange: () => {},
}

export default SearchInput
