import { any } from 'prop-types'
import theme from '../theme'

function Link({ as: Component, ...props }) {
  return (
    <Component
      css={{
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          color: theme.colors.primary[0],
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
