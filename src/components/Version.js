import React from 'react';

import Text from './Text';

const version = require('../../package.json').dependencies['feather-icons'];

function Version(props) {
  return <Text {...props}>v{version}</Text>;
}

export default Version;
