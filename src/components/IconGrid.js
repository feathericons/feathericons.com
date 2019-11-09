/** @jsx jsx */
import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import { arrayOf, func, shape, string } from 'prop-types'
import React from 'react'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'
import { jsx } from 'theme-ui'
import logCopy from '../utils/logCopy'
import logDownload from '../utils/logDownload'
import IconTile from './IconTile'

const MAX_COLUMN_WIDTH = 180

function IconGrid({ icons }) {
  const [numColumns, setNumColumns] = React.useState(1)
  return (
    <div sx={{ margin: -2 }}>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) =>
              setNumColumns(Math.floor(width / MAX_COLUMN_WIDTH))
            }
          >
            {({ width }) => (
              <List
                autoHeight
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={Math.ceil(icons.length / numColumns)}
                rowHeight={160}
                rowRenderer={({
                  key, // Unique key within array of rows
                  index, // Index of row within collection
                  isScrolling, // The List is currently being scrolled
                  isVisible, // This row is visible within the List (eg it is not an overscanned row)
                  style, // Style object to be applied to row (to position it)
                }) => (
                  <div
                    key={key}
                    style={style}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                      justifyItems: 'strech',
                    }}
                  >
                    {Array.from({ length: numColumns }, (v, i) => {
                      const icon = icons[index * numColumns + i]
                      if (!icon) {
                        return null
                      }
                      return (
                        <div key={icon.name} sx={{ margin: 2 }}>
                          <IconTile
                            key={icon.name}
                            name={icon.name}
                            title={`Download ${icon.name}.svg`}
                            onClick={event => {
                              if (event.shiftKey) {
                                copy(icon.toSvg())
                                logCopy(icon.name)
                              } else {
                                download(
                                  icon.toSvg(),
                                  `${icon.name}.svg`,
                                  'image/svg+xml',
                                )
                                logDownload(icon.name)
                              }
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                )}
                scrollTop={scrollTop}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
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
