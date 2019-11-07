import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import { arrayOf, func, shape, string } from 'prop-types'
import theme from '../theme'
import logCopy from '../utils/logCopy'
import logDownload from '../utils/logDownload'
import IconTile from './IconTile'

function IconGrid({ icons }) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridGap: theme.space[4],
      }}
    >
      {icons.map(icon => (
        <IconTile
          key={icon.name}
          name={icon.name}
          title={`Download ${icon.name}.svg`}
          onClick={event => {
            if (event.shiftKey) {
              copy(icon.toSvg())
              logCopy(icon.name)
            } else {
              download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
              logDownload(icon.name)
            }
          }}
        />
      ))}
    </div>
  )
}

IconGrid.propTypes = {
  icons: arrayOf(
    shape({
      name: string,
      toSvg: func,
    }),
  ).isRequired,
}

export default IconGrid
