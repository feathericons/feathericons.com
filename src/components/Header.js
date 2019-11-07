/** @jsx jsx */
import { version } from 'feather-icons/package.json'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import ColorModeToggle from './ColorModeToggle'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Header() {
  return (
    <header
      sx={{
        paddingY: 4,
        paddingX: 5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link as={GatsbyLink} to="/" sx={{ fontSize: 4 }}>
        Feather
      </Link>

      <OutboundLink
        href="https://github.com/feathericons/feather/releases"
        onClick={() => logOutboundLink('release notes')}
        sx={{
          paddingY: 1,
          paddingX: 2,
          marginLeft: 2,
          fontSize: 1,
          lineHeight: 'tight',
          fontWeight: 'medium',
          textDecoration: 'none',
          color: 'inherit',
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 1,
          '&:hover': {
            backgroundColor: 'background',
          },
        }}
      >
        v{version}
      </OutboundLink>

      {/* Spacer */}
      <div sx={{ marginX: 'auto' }} />

      <Link
        as={OutboundLink}
        href="https://github.com/feathericons/feather"
        onClick={() => logOutboundLink('github')}
      >
        GitHub
      </Link>

      <ColorModeToggle sx={{ marginLeft: 4 }} />
    </header>
  )
}

export default Header
