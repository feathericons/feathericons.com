import React from 'react';
import PropTypes from 'prop-types';
import { color, space } from 'styled-system';
import { icons } from 'feather-icons';
import camelcaseKeys from 'camelcase-keys';
import classnames from 'classnames';

import withSystem from '../utils/with-system';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  className: '',
  size: 24,
};

function Icon({ className, name, size }) {
  const { class: defaultClassName, ...attrs } = icons[name].attrs;

  return (
    <svg
      {...camelcaseKeys(attrs)}
      className={classnames(defaultClassName, className)}
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withSystem(Icon, [space, color], { color: 'gray.7' });
