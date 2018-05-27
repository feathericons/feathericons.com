import system from 'system-components'

const Button = system(
  {
    is: 'button',
    fontSize: 2,
    fontWeight: 'medium',
    lineHeight: 'tight',
    m: 0,
    px: 5,
    py: 4,
    color: 'white',
    bg: 'base',
    borderRadius: 1,
    border: 0,
    textAlign: 'center',
  },
  {
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    textDecoration: 'none',
    appearance: 'none',
  },
)

export default Button
