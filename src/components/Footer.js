import theme from '../theme'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Footer() {
  return (
    <footer
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.space[5],
        fontSize: theme.fontSizes[1],
      }}
    >
      <Link
        as={OutboundLink}
        href="https://twitter.com/colebemis"
        onClick={() => logOutboundLink('made by @colebemis')}
      >
        Made by @colebemis
      </Link>
    </footer>
  )
}

export default Footer
