/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

function CarbonAd(props) {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//cdn.carbonads.com/carbon.js?serve=CE7D453W&placement=feathericonscom'
    script.id = '_carbonads_js'
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div
      ref={containerRef}
      sx={{
        minHeight: 132,
        '#carbonads': {
          position: 'relative',
          padding: 4,
          maxWidth: 400,
          fontSize: 1,
          bg: 'background',
          borderRadius: 1,
        },
        '.carbon-wrap': {
          display: 'flex',
          alignItems: 'flex-start',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        '.carbon-text': {
          ml: 4,
          mb: 6,
        },
        '.carbon-poweredby': {
          position: 'absolute',
          right: 4,
          bottom: 4,
        },
      }}
      {...props}
    />
  )
}

export default CarbonAd
