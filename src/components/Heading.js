import React from 'react';

import Text from './Text';

function Heading(props) {
  return (
    <Text
      is="h1"
      fontSize={5}
      fontWeight="normal"
      lineHeight="tight"
      {...props}
    />
  );
}

export default Heading;
