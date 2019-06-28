import { Global } from '@emotion/core'
import theme from '../theme'

function GlobalStyles() {
  return (
    <Global
      styles={{
        '*, *:before, *:after': {
          boxSizing: 'inherit',
        },

        body: {
          boxSizing: 'border-box',
          margin: 0,
          fontFamily: theme.fonts.sansSerif,
          lineHeight: theme.lineHeights.normal,
          color: theme.colors.gray[8],
          backgroundColor: theme.colors.gray[0],
        },
      }}
    />
  )
}

export default GlobalStyles
