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
import Link from './Link';
import Icon from './Icon';
import Text from './Text';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function IconTile({ className, name }) {
  return (
    <Flex is={Link} className={className} to={`icon/${name}`}>
      <Icon name={name} />
      <Text ml={4}>{name}</Text>
    </Flex>
  );
}

IconTile.propTypes = propTypes;
IconTile.defaultProps = defaultProps;

export default withSystem(
  IconTile,
  [width, space, color, borderRadius, shadow, hover],
  {
    width: 1,
    p: 5,
    bg: 'gray.0',
    borderRadius: 1,
    hover: {
      backgroundColor: 'white',
      boxShadow: 2,
    },
  }
);
