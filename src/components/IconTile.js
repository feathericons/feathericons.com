/** @jsx jsx */
import { func, string } from 'prop-types'
import { jsx } from 'theme-ui'
import Icon from './Icon'
import { useOptions } from './OptionsContext'

function IconTile({ name, onClick, ...props }) {
  const { options } = useOptions()
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
        width: '100%',
        height: '100%',
        paddingBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'background',
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
      <div
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          name={name}
          width={options.size}
          height={options.size}
          strokeWidth={options.strokeWidth}
          stroke={options.strokeColor}
        />
      </div>
      <span
        sx={{
          flex: '0 0 auto',
          fontSize: 1,
          paddingX: 4,
          textAlign: 'center',
          wordBreak: 'break-word',
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
