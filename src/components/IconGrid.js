import React from 'react'
import { arrayOf, shape, string, func } from 'prop-types'
import download from 'downloadjs'
import Box from './Box'
import Flex from './Flex'
import logDownload from '../utils/log-download'
import IconTile from './IconTile'

const propTypes = {
  icons: arrayOf(shape({ name: string, toSvg: func })).isRequired,
}

function IconGrid({ icons }) {
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {icons.map(icon => (
        <Box key={icon.name} w={[1, 1 / 2, 1 / 3, 1 / 4]} p={2}>
          <IconTile
            name={icon.name}
            title={`Download ${icon.name}.svg`}
            onClick={() => {
              download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
              logDownload(icon.name)
            }}
            w="100%"
          />
        </Box>
      ))}
    </Flex>
  )
}

IconGrid.propTypes = propTypes

export default IconGrid
