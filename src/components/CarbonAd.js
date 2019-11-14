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
        width: '100%',
        minHeight: 132,
        padding: 4,
        fontSize: 1,
        backgroundColor: 'background',
        borderRadius: 1,
        overflow: 'hidden',
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        '#carbonads': {
          position: 'relative',
        },
        '.carbon-wrap': {
          display: 'flex',
          alignItems: 'flex-start',
        },
        '.carbon-img': {
          lineHeight: 0,
        },
        '.carbon-text': {
          marginLeft: 4,
          marginBottom: 6,
        },
        '.carbon-poweredby': {
          position: 'absolute',
          right: 0,
          bottom: 0,
        },
      }}
      {...props}
    />
  )
}

export default CarbonAd
