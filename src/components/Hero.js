/** @jsx jsx */
import download from 'downloadjs'
import { icons } from 'feather-icons'
import JSZip from 'jszip'
import isEmpty from 'lodash.isempty'
import { jsx } from 'theme-ui'
import logDownload from '../utils/logDownload'
import logOutboundLink from '../utils/logOutboundLink'
import Button from './Button'
import { useOptions } from './OptionsContext'
import OutboundLink from './OutboundLink'

function Hero() {
  const { options } = useOptions()

  const attrs = !isEmpty(options)
    ? {
        width: options.size,
        height: options.size,
        stroke: options.strokeColor,
        'stroke-width': options.strokeWidth,
      }
    : {}

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: [8, 9],
        paddingX: 5,
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
            const zip = await generateZip(attrs)
            download(zip, 'feather.zip')
            logDownload('all')
          }}
          sx={{ variant: 'buttons.outline' }}
        >
          Download all
        </Button>
      </div>
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
