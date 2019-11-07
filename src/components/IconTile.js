/** @jsx jsx */
import { func, string } from 'prop-types'
import { jsx } from 'theme-ui'
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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        bg: 'elevated',
        borderRadius: 1,
        boxShadow: 1,
        outline: 0,
        '&:hover': {
          boxShadow: 2,
        },
        '&:focus': {
          boxShadow: theme => `0 0 0 3px ${theme.colors.primary}`,
        },
      }}
      {...props}
    >
      <AspectRatioBox ratio={2 / 3}>
        <div
          sx={{
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
        sx={{
          fontSize: 1,
          px: 4,
          pb: 4,
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
