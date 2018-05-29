import { rgba } from 'polished'
import { themeGet } from 'styled-system'
import system from 'system-components'

const Button = system(
  {
    is: 'button',
    m: 0,
    px: 5,
    py: 4,
    fontSize: 2,
    fontWeight: 'medium',
    lineHeight: 'tight',
    color: 'white',
    bg: 'base',
    borderRadius: 1,
    border: 0,
    textAlign: 'center',
    hover: {
      boxShadow: 'inset 0 0 0 999px rgba(0, 0, 0, 0.1)',
    },
  },
  props => ({
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    textDecoration: 'none',
    appearance: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 0,
      boxShadow: `0 0 0 3px ${rgba(themeGet('colors.base')(props), 1 / 2)}`,
    },
  }),
  'width',
  'hover',
  'focus',
)

export default Button
