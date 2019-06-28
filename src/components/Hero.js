import React from 'react'
import theme from '../theme'
import logDownload from '../utils/logDownload'
import logOutboundLink from '../utils/logOutboundLink'
import Button from './Button'
import OutboundLink from './OutboundLink'

function Hero() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.space[9]} ${theme.space[5]} ${theme.space[11]}`,
        backgroundColor: theme.colors.white,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      }}
    >
      <h1
        css={{
          margin: `0 0 ${theme.space[5]}`,
          fontSize: theme.fontSizes[6],
          fontWeight: theme.fontWeights.normal,
          lineHeight: theme.lineHeights.tight,
          textAlign: 'center',
        }}
      >
        Simply beautiful open source icons
      </h1>

      <div css={{ '& > :not(:last-child)': { marginRight: theme.space[4] } }}>
        <Button
          as={OutboundLink}
          href="https://github.com/feathericons/feather#feather"
          onClick={() => logOutboundLink('get started')}
          css={{
            color: theme.colors.white,
            backgroundColor: theme.colors.primary[0],
            '&:hover': {
              backgroundColor: theme.colors.primary[1],
            },
          }}
        >
          Get Started
        </Button>

        <Button
          as={OutboundLink}
          href="/feather.zip"
          onClick={() => logDownload('all')}
          download
          css={{
            color: theme.colors.gray[8],
            backgroundColor: 'transparent',
            boxShadow: `inset 0 0 0 1px ${theme.colors.gray[4]}`,
            '&:hover': {
              backgroundColor: theme.colors.gray[0],
            },
          }}
        >
          Download All
        </Button>
      </div>
    </div>
  )
}

export default Hero
