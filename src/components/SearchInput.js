/** @jsx jsx */
import { func, string } from 'prop-types'
import React from 'react'
import { jsx } from 'theme-ui'
import Icon from './Icon'

function SearchInput({ placeholder, value, onChange, ...props }) {
  const inputElement = React.useRef(null)

  function handleKeyDown(event) {
    if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div css={{ position: 'relative' }} {...props}>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Icon name="search" sx={{ color: 'icon' }} />
      </div>
      <input
        ref={inputElement}
        type="search"
        aria-label="Search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          width: '100%',
          margin: 0,
          padding: 4,
          paddingLeft: 52,
          fontSize: 'inherit',
          lineHeight: 'none',
          fontFamily: 'inherit',
          color: 'inherit',
          backgroundColor: 'background',
          boxShadow: 1,
          border: 0,
          appearance: 'none',
          outline: 0,
          borderRadius: 1,
          // Removes the extra left padding added to search inputs on Safari
          '::-webkit-search-decoration': {
            display: 'none',
          },
          '&:focus': {
            boxShadow: theme => `0 0 0 3px ${theme.colors.primary}`,
          },
        }}
      />
    </div>
  )
}

SearchInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
}

export default SearchInput
