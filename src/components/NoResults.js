import { string } from 'prop-types'
import theme from '../theme'
import mediaQuery from '../utils/mediaQuery'

function NoResults({ query }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.space[7]} ${theme.space[6]}`,
        margin: theme.space[4],
        backgroundColor: theme.colors.gray[2],
        wordBreak: 'break-word',
        fontSize: theme.fontSizes[3],
        textAlign: 'center',
        borderRadius: theme.radii[1],
        [mediaQuery(theme.breakpoints.large)]: {
          margin: theme.space[6],
        },
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
