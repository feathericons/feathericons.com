/* eslint-disable no-unused-expressions */
import { rgba } from 'polished'
import { injectGlobal } from 'styled-components'
import { colors, fonts } from './theme'

injectGlobal({
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },

  body: {
    boxSizing: 'border-box',
    margin: 0,
    fontFamily: fonts.sans,
  },

  'button::-moz-focus-inner': {
    border: 0,
  },

  '::selection': {
    backgroundColor: rgba(colors.base, 1 / 4),
  },

  '::-moz-selection': {
    backgroundColor: rgba(colors.base, 1 / 4),
  },
})
