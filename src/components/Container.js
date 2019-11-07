/** @jsx jsx */
import { jsx } from 'theme-ui'

function Container(props) {
  return (
    <div
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        px: 5,
        py: 4,
      }}
      {...props}
    />
  )
}

export default Container
