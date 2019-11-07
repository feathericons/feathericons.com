/** @jsx jsx */
import { any } from 'prop-types'
import { jsx } from 'theme-ui'

function Link({ as: Component, ...props }) {
  return (
    <Component
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary.0',
        },
      }}
      {...props}
    />
  )
}

Link.propTypes = {
  as: any,
}

Link.defaultProps = {
  as: 'a',
}

export default Link
