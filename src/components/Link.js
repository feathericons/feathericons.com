import system from 'system-components'
import { themeGet } from 'styled-system'
import { rgba } from 'polished'

const Link = system(
  {
    is: 'a',
    fontSize: 2,
    fontWeight: 'normal',
    color: 'gray9',

    hover: {
      color: 'base',
    },
  },
  props => ({
    textDecoration: 'none',

    '&:focus': {
      outline: `3px solid ${rgba(themeGet('colors.base')(props), 0.5)}`,
      outlineOffset: '2px',
    },
  }),
  'space',
  'width',
)

Link.displayName = 'Link'

export default Link
