import React from 'react'
import theme from '../theme'

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
      css={{
        width: 400,
        minHeight: 132,
        padding: theme.space[4],
        backgroundColor: theme.colors.gray[1],
        borderRadius: theme.radii[1],
        '#carbonads': {
          width: '100%',
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
          right: 0,
          bottom: 0,
        },
      }}
      {...props}
    />
  )
}

export default CarbonAd
