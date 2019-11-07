import { rgba } from 'polished'
import { func, string } from 'prop-types'
import theme from '../theme'
import AspectRatioBox from './AspectRatioBox'
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
        alignItems: 'center',
        cursor: 'pointer',
        outline: 0,
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[1],
        boxShadow: theme.shadows[1],
        '&:hover': {
          boxShadow: theme.shadows[2],
        },
        '&:focus': {
          boxShadow: `0 0 0 3px ${rgba(theme.colors.primary[0], 0.5)}`,
        },
      }}
      {...props}
    >
      <AspectRatioBox ratio={2 / 3}>
        <div
          css={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name={name} />
        </div>
      </AspectRatioBox>
      <span
        css={{
          fontSize: theme.fontSizes[1],
          color: theme.colors.gray[8],
          padding: ` 0 ${theme.space[4]} ${theme.space[4]}`,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
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
