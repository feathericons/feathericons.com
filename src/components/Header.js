/** @jsx jsx */
import { version } from 'feather-icons/package.json'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'
import { useColorMode } from 'theme-ui'
import Icon from './Icon'
import Button from './Button'

function Header() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      sx={{
        py: 4,
        px: 5,
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
          py: 1,
          px: 2,
          ml: 2,
          fontSize: 1,
          lineHeight: 'tight',
          fontWeight: 'medium',
          textDecoration: 'none',
          color: 'inherit',
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 1,
          '&:hover': {
            bg: 'background',
          },
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

      <Button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
        sx={{
          bg: 'transparent',
          p: 1,
          color: 'icon',
          ml: 4,
        }}
      >
        {colorMode === 'default' ? (
          <Icon name="moon" sx={{ fill: 'currentColor' }} />
        ) : (
          <Icon name="sun" sx={{ fill: 'currentColor' }} />
        )}
      </Button>
    </header>
  )
}

export default Header
