import { rgba } from 'polished'
import { string, func } from 'prop-types'
import theme from '../theme'
import Icon from './Icon'

function IconTile({ name, onClick, ...props }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick(event)
        }
      }}
      css={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'stretch',
        cursor: 'pointer',
        outline: 0,
        '&:hover .icon-container': {
          color: theme.colors.primary[0],
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
    </div>
  )
}

IconTile.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
}

export default IconTile
