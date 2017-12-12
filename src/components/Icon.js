import React from 'react';
import { number, oneOfType, string } from 'prop-types';
import { icons } from 'feather-icons';
import classnames from 'classnames';

import kebabToCamelKeys from '../utils/kebab-to-camel';

const propTypes = {
  name: string.isRequired,
  className: string,
  size: oneOfType([string, number]),
  color: string,
};

const defaultProps = {
  className: '',
  size: 24,
  color: 'inherit',
};

function Icon({ className, name, size, color }) {
  const { class: defaultClassName, ...attrs } = icons[name].attrs;

  return (
    <svg
      {...kebabToCamelKeys(attrs)}
      className={classnames(defaultClassName, className)}
      width={size}
      height={size}
      color={color}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
