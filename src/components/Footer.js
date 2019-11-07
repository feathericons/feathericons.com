/** @jsx jsx */
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Footer() {
  return (
    <footer sx={{ paddingY: 4, borderTop: '1px solid', borderColor: 'border' }}>
      <Link
        as={OutboundLink}
        href="https://twitter.com/colebemis"
        onClick={() => logOutboundLink('made by @colebemis')}
        sx={{ fontSize: 1 }}
      >
        Made by @colebemis
      </Link>
    </footer>
  )
}

export default Footer
