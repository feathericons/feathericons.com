import classnames from 'classnames'
import { icons } from 'feather-icons'
import { number, oneOfType, string } from 'prop-types'
import React from 'react'
import kebabToCamelKeys from '../utils/kebab-to-camel'

function Icon({ className, name, size, color }) {
  const { class: defaultClassName, ...attrs } = icons[name].attrs

  return (
    <svg
      {...kebabToCamelKeys(attrs)}
      className={classnames(defaultClassName, className)}
      width={size}
      height={size}
      color={color}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  )
}

Icon.propTypes = {
  name: string.isRequired,
  className: string,
  size: oneOfType([string, number]),
  color: string,
}

Icon.defaultProps = {
  className: '',
  size: 24,
  color: 'inherit',
}

export default Icon
