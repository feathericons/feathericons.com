import { string } from 'prop-types'
import theme from '../theme'

function NoResults({ query }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.space[9]} ${theme.space[6]}`,
        backgroundColor: theme.colors.gray[2],
        wordBreak: 'break-word',
        fontSize: theme.fontSizes[3],
        textAlign: 'center',
        borderRadius: theme.radii[1],
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
