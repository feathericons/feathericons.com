import { rgba } from 'polished'
import { func, string } from 'prop-types'
import theme from '../theme'
import Icon from './Icon'

function SearchInput({ placeholder, value, onChange, ...props }) {
  return (
    <div css={{ position: 'relative' }} {...props}>
      <div
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: theme.space[4],
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Icon name="search" color={theme.colors.gray[6]} />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        css={{
          width: '100%',
          margin: 0,
          padding: theme.space[4],
          paddingLeft: '3.25rem',
          fontSize: 'inherit',
          lineHeight: theme.lineHeights.none,
          fontFamily: 'inherit',
          color: 'inherit',
          background: theme.colors.white,
          boxShadow: theme.shadows[1],
          border: 0,
          borderRadius: 0,
          appearance: 'none',
          outline: 0,
          // Removes the extra left padding added to search inputs on Safari
          '::-webkit-search-decoration': {
            display: 'none',
          },
          '&:focus': {
            boxShadow: `inset 0 0 0 3px ${rgba(theme.colors.primary[0], 0.5)}`,
          },
        }}
      />
    </div>
  )
}

SearchInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
}

SearchInput.defaultProps = {
  placeholder: 'Search',
}

export default SearchInput
