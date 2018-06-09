import { rgba } from 'polished'
import { themeGet } from 'styled-system'
import system from 'system-components'

const BlockLink = system(
  {
    is: 'a',
    color: 'inherit',
  },
  props => ({
    display: 'block',
    textDecoration: 'none',

    '&:focus': {
      outline: `3px solid ${rgba(themeGet('colors.base')(props), 0.5)}`,
      outlineOffset: '2px',
    },
  }),
  'space',
  'width',
)

BlockLink.displayName = 'BlockLink'

export default BlockLink
