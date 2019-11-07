/** @jsx jsx */
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Footer() {
  return (
    <footer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 5,
        fontSize: 1,
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
