/** @jsx jsx */
import { version } from 'feather-icons/package.json'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Header() {
  return (
    <div
      sx={{
        py: 4,
        px: 5,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background',
      }}
    >
      <Link as={GatsbyLink} to="/" sx={{ fontSize: 4 }}>
        Feather
      </Link>

      <OutboundLink
        href="https://github.com/feathericons/feather/releases"
        onClick={() => logOutboundLink('release notes')}
        sx={{
          py: 1,
          px: 2,
          ml: 2,
          fontSize: 1,
          lineHeight: 'tight',
          fontWeight: 'medium',
          textDecoration: 'none',
          color: 'inherit',
          bg: 'muted',
          borderRadius: 1,
        }}
      >
        v{version}
      </OutboundLink>

      <div sx={{ mx: 'auto' }} />

      <Link
        as={OutboundLink}
        href="https://github.com/feathericons/feather"
        onClick={() => logOutboundLink('github')}
      >
        GitHub
      </Link>
    </div>
  )
}

export default Header
