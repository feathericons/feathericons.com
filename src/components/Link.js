import { func, oneOf, string } from 'prop-types'
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
  as: oneOf([func, string]),
}

Link.defaultProps = {
  as: 'a',
}

export default Link
