import { version } from 'feather-icons/package.json'
import { Link as GatsbyLink } from 'gatsby'
import MediaQuery from 'react-responsive'
import theme from '../theme'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Header() {
  return (
    <div
      css={{
        padding: `${theme.space[4]} ${theme.space[5]}`,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}
    >
      <Link
        as={GatsbyLink}
        to="/"
        css={{
          fontSize: theme.fontSizes[4],
        }}
      >
        Feather
      </Link>

      <OutboundLink
        href="https://github.com/feathericons/feather/releases"
        onClick={() => logOutboundLink('release notes')}
        css={{
          padding: `${theme.space[1]} ${theme.space[2]}`,
          marginLeft: theme.space[2],
          fontSize: theme.fontSizes[1],
          lineHeight: theme.lineHeights.tight,
          fontWeight: theme.fontWeights.medium,
          textDecoration: 'none',
          color: theme.colors.gray[7],
          backgroundColor: theme.colors.gray[1],
          borderRadius: theme.radii[1],
          '&:hover': {
            backgroundColor: theme.colors.gray[2],
          },
        }}
      >
        v{version}
      </OutboundLink>

      <div css={{ margin: '0 auto' }} />

      <div
        css={{
          display: 'flex',
          '& > :not(:last-child)': {
            marginRight: theme.space[5],
          },
        }}
      >
        <MediaQuery minWidth={theme.breakpoints.small}>
          <Link
            as={OutboundLink}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              'Feather – Simply beautiful open source icons by @colebemis https://feathericons.com',
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logOutboundLink('tweet')}
          >
            Tweet
          </Link>

          <Link
            as={OutboundLink}
            href="https://www.paypal.me/colebemis/5"
            onClick={() => logOutboundLink('donate')}
          >
            Donate
          </Link>

          <Link
            as={OutboundLink}
            href="https://github.com/feathericons/feather#feather"
            onClick={() => logOutboundLink('usage')}
          >
            Usage
          </Link>
        </MediaQuery>

        <Link
          as={OutboundLink}
          href="https://github.com/feathericons/feather"
          onClick={() => logOutboundLink('github')}
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}

export default Header
