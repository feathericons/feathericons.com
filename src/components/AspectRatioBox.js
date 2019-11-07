/** @jsx jsx */
import { jsx } from 'theme-ui'

function AspectRatioBox({ ratio, children, ...props }) {
  return (
    <div
      sx={{
        width: '100%',
        position: 'relative',
        paddingTop: `${ratio * 100}%`,
      }}
      {...props}
    >
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

AspectRatioBox.defaultProps = {
  ratio: 1,
}

export default AspectRatioBox
