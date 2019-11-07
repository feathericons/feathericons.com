/** @jsx jsx */
import { string } from 'prop-types'
import { jsx } from 'theme-ui'

function NoResults({ query }) {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 9,
        py: 6,
        backgroundColor: 'gray.2',
        wordBreak: 'break-word',
        fontSize: 3,
        textAlign: 'center',
        borderRadius: 1,
      }}
    >
      No results found for &ldquo;{query}&rdquo;
    </div>
  )
}

NoResults.propTypes = {
  query: string.isRequired,
}

export default NoResults
