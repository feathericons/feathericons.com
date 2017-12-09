import React from 'react';

import Text from './Text';

function Heading(props) {
  return (
    <Text
      is="h1"
      fontSize={5}
      fontWeight="normal"
      align="center"
      lineHeight="tight"
      my={0}
      {...props}
    />
  );
}

export default Heading;
