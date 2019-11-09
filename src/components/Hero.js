/** @jsx jsx */
import download from 'downloadjs'
import { icons } from 'feather-icons'
import JSZip from 'jszip'
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
        paddingY: [8, 9],
        paddingX: 5,
        borderBottom: '1px solid',
        borderColor: 'border',
      }}
    >
      <h1
        sx={{
          marginTop: 0,
          marginBottom: 5,
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
        >
          Get started
        </Button>
        <Button
          onClick={async () => {
            const zip = await generateZip()
            download(zip, 'feather.zip')
            logDownload('all')
          }}
          sx={{ variant: 'buttons.outline' }}
        >
          Download all
        </Button>
      </div>

      <CarbonAd sx={{ marginTop: 8 }} />
    </div>
  )
}

function generateZip(options) {
  const zip = new JSZip()
  Object.values(icons).forEach(icon =>
    zip.file(`${icon.name}.svg`, icon.toSvg(options)),
  )
  return zip.generateAsync({ type: 'blob' })
}

export default Hero
