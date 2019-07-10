import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import { arrayOf, func, shape, string } from 'prop-types'
import logCopy from '../utils/logCopy'
import logDownload from '../utils/logDownload'
import IconTile from './IconTile'
import mediaQuery from '../utils/mediaQuery'
import theme from '../theme'

function IconGrid({ icons }) {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        rowGap: theme.space[5],
        columnGap: theme.space[4],
        margin: '0 auto',
        [mediaQuery(theme.breakpoints.large)]: {
          columnGap: theme.space[5],
        },
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
