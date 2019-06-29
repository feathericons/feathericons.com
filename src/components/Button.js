import { any } from 'prop-types'
import theme from '../theme'

function Button({ as: Component, ...props }) {
  return (
    <Component
      css={{
        display: 'inline-block',
        margin: 0,
        padding: `${theme.space[4]} ${theme.space[5]}`,
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.medium,
        fontFamily: 'inherit',
        lineHeight: theme.lineHeights.none,
        textAlign: 'center',
        textDecoration: 'none',
        border: 0,
        borderRadius: theme.radii[1],
        appearance: 'none',
        cursor: 'pointer',
        '&:disabled': {
          opacity: 0.5,
          cursor: 'default',
        },
      }}
      {...props}
    />
  )
}

Button.propTypes = {
  as: any,
}

Button.defaultProps = {
  as: 'button',
}

export default Button
