import React from 'react';
import PropTypes from 'prop-types';
import camelcaseKeys from 'camelcase-keys';
import classnames from 'classnames';
import { icons } from 'feather-icons';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Icon({ name, ...props }) {
  return (
    <svg
      {...camelcaseKeys(icons[name].attrs)}
      {...props}
      {...{ className: classnames(icons[name].attrs.class, props.className) }}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    />
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
