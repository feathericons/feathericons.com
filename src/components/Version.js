import React from 'react';
import PropTypes from 'prop-types';
import { space, fontSize, fontWeight, color } from 'styled-system';

import lineHeight from '../utils/line-height';
import withSystem from '../utils/with-system';
import Text from './Text';

const version = require('../../package.json').dependencies['feather-icons'];

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Version({ className }) {
  return <Text className={className}>v{version}</Text>;
}

Version.propTypes = propTypes;
Version.defaultProps = defaultProps;

export default withSystem(Version, [
  space,
  fontSize,
  fontWeight,
  lineHeight,
  color,
]);
