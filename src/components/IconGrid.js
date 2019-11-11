/** @jsx jsx */
import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import { arrayOf, func, shape, string } from 'prop-types'
import { jsx } from 'theme-ui'
import logCopy from '../utils/logCopy'
import logDownload from '../utils/logDownload'
import IconTile from './IconTile'
import React from 'react'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'

// IconGrid might need to display a lot of icons (>200).
// To avoid an excessive DOM size, we use react-virtualized
// to only render the icons that are visible on the screen.

const ROW_HEIGHT = 160
const MAX_COLUMN_WIDTH = 180

function IconGrid({ icons }) {
  // Initialize numColumns to an aribtrary number.
  const [numColumns, setNumColumns] = React.useState(1)
  return (
    <div sx={{ margin: -2 }}>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) =>
              // Recompute the number of columns when the grid resizes.
              // This function is also called on initial render.
              setNumColumns(Math.floor(width / MAX_COLUMN_WIDTH))
            }
          >
            {({ width }) => (
              <List
                tabIndex={-1}
                autoHeight
                width={width}
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowCount={Math.ceil(icons.length / numColumns)}
                rowHeight={ROW_HEIGHT}
                rowRenderer={({ key, index: rowIndex, style }) => (
                  <div
                    key={key}
                    style={style}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                      justifyItems: 'stretch',
                      alignItems: 'stretch',
                    }}
                  >
                    {// Render each column.
                    Array.from({ length: numColumns }, (value, columnIndex) => {
                      // Calculate the icon index using row and column indices.
                      const icon = icons[rowIndex * numColumns + columnIndex]

                      // The icon index we computed might be out of range.
                      // If that's the case, render nothing.
                      if (!icon) {
                        return null
                      }

                      return (
                        <div key={icon.name} sx={{ padding: 2 }}>
                          <IconTile
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
