/** @jsx jsx */
import { jsx } from 'theme-ui'
import logDownload from '../utils/logDownload'
import logOutboundLink from '../utils/logOutboundLink'
import Button from './Button'
import CarbonAd from './CarbonAd'
import OutboundLink from './OutboundLink'

function Hero() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: [8, 9],
        px: 5,
        pb: [9, 10],
        bg: 'elevated',
        borderBottom: '1px solid',
        borderColor: 'border',
      }}
    >
      <h1
        sx={{
          mt: 0,
          mb: 5,
          fontSize: 6,
          fontWeight: 'normal',
          lineHeight: 'tight',
          textAlign: 'center',
        }}
      >
        Simply beautiful open source icons
      </h1>

      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          justifyContent: 'center',
          width: '100%',
          '& > :not(:last-child)': {
            marginRight: [0, 4],
            marginBottom: [5, 0],
          },
        }}
      >
        <Button
          as={OutboundLink}
          href="https://github.com/feathericons/feather#feather"
          onClick={() => logOutboundLink('get started')}
          sx={{
            color: 'white',
            bg: 'primary',
          }}
        >
          Get Started
        </Button>
        <Button
          as={OutboundLink}
          href="/feather.zip"
          onClick={() => logDownload('all')}
          download
          sx={{
            bg: 'transparent',
            boxShadow: theme => `inset 0 0 0 1px ${theme.colors.border}`,
          }}
        >
          Download All
        </Button>
      </div>
      <CarbonAd sx={{ mt: 8 }} />
    </div>
  )
}

export default Hero
