/** @jsx jsx */
import { any } from 'prop-types'
import { jsx } from 'theme-ui'

function Button({ as: Component, ...props }) {
  return (
    <Component
      sx={{
        display: 'inline-block',
        margin: 0,
        paddingY: 4,
        paddingX: 5,
        fontSize: 2,
        fontWeight: 'medium',
        fontFamily: 'inherit',
        lineHeight: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
        border: 0,
        borderRadius: 1,
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
