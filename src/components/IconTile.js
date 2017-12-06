import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import {
  width,
  space,
  color,
  borderRadius,
  shadow,
  hover,
} from 'styled-system';

import withSystem from '../utils/with-system';
import Icon from './Icon';
import Text from './Text';

const propTypes = {
  name: PropTypes.string.isRequired,
};

function IconTile({ name, ...props }) {
  return (
    <Flex {...props}>
      <Icon name={name} />
      <Text ml={4} fontSize={2}>
        {name}
      </Text>
    </Flex>
  );
}

IconTile.propTypes = propTypes;

export default withSystem(
  IconTile,
  [width, space, color, borderRadius, shadow, hover],
  { width: 1, p: 5 }
);
