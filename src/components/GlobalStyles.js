import React from 'react'
import { Global } from '@emotion/core'

function GlobalStyles() {
  return (
    <Global
      styles={theme => ({
        '*, *:before, *:after': {
          boxSizing: 'inherit',
        },

        body: {
          boxSizing: 'border-box',
          margin: 0,
          fontFamily: theme.fonts.sansSerif,
          lineHeight: theme.lineHeights.normal,
          color: theme.colors.text,
          backgroundColor: theme.colors.muted,
        },
      })}
    />
  )
}

export default GlobalStyles
