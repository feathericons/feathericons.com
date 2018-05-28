import classnames from 'classnames'
import { icons } from 'feather-icons'
import { number, oneOfType, string } from 'prop-types'
import React from 'react'
import system from 'system-components'
import kebabToCamelKeys from '../utils/kebab-to-camel'

const Svg = system(
  {
    is: 'svg',
  },
  {
    boxSizing: 'content-box',
    verticalAlign: 'middle',
  },
  'space',
  'color',
)

function Icon({ className, name, size, ...props }) {
  const { class: defaultClassName, ...attrs } = icons[name].attrs

  return (
    <Svg
      {...kebabToCamelKeys(attrs)}
      className={classnames(defaultClassName, className)}
      aria-hidden
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
      {...props}
    />
  )
}

Icon.propTypes = {
  name: string.isRequired,
  className: string,
  size: oneOfType([string, number]),
}

Icon.defaultProps = {
  className: '',
  size: 24,
}

export default Icon
