import { rgba } from 'polished'
import { string } from 'prop-types'
import theme from '../theme'
import Icon from './Icon'

function IconTile({ name, ...props }) {
  return (
    <button
      css={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'stretch',
        padding: 0,
        background: 'transparent',
        border: 0,
        appearance: 'none',
        cursor: 'pointer',
        outline: 0,
        '&:hover .icon-container': {
          boxShadow: theme.shadows[2],
        },
        '&:focus .icon-container': {
          boxShadow: `0 0 0 3px ${rgba(theme.colors.primary[0], 0.5)}`,
        },
      }}
      {...props}
    >
      <div
        className="icon-container"
        css={{
          width: '100%',
          padding: '24px 0',
          backgroundColor: theme.colors.white,
          borderRadius: 4,
          marginBottom: 8,
          boxShadow: theme.shadows[1],
        }}
      >
        <Icon name={name} />
      </div>
      <span css={{ fontSize: theme.fontSizes[1], color: theme.colors.gray[8] }}>
        {name}
      </span>
    </button>
  )
}

IconTile.propTypes = {
  name: string.isRequired,
}

export default IconTile
