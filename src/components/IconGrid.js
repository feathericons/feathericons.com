import download from 'downloadjs'
import copy from 'copy-to-clipboard'
import { arrayOf, func, shape, string } from 'prop-types'
import React from 'react'
import logDownload from '../utils/logDownload'
import Box from './Box'
import Flex from './Flex'
import IconTile from './IconTile'

function IconGrid({ icons }) {
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {icons.map(icon => (
        <Box key={icon.name} width={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
          <IconTile
            name={icon.name}
            title={`Download ${icon.name}.svg`}
            onClick={e => {
              logDownload(icon.name)
              return e.shiftKey
                ? copy(icon.toSvg())
                : download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
            }}
          />
        </Box>
      ))}
    </Flex>
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
