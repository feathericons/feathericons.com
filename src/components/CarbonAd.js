import React from 'react'
import theme from '../theme'

function CarbonAd() {
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
      css={{
        '#carbonads': {
          maxWidth: 400,
          padding: theme.space[4],
          marginTop: theme.space[8],
          backgroundColor: theme.colors.gray[1],
          borderRadius: theme.radii[1],
          fontSize: theme.fontSizes[1],
          position: 'relative',
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
          marginLeft: theme.space[4],
          marginBottom: theme.space[6],
        },
        '.carbon-poweredby': {
          position: 'absolute',
          right: theme.space[4],
          bottom: theme.space[4],
        },
      }}
    />
  )
}

export default CarbonAd
