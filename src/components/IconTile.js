import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import {
  width,
  space,
  color,
  borderRadius,
  shadow,
  hover,
  focus,
} from 'styled-system';

import withSystem from '../utils/with-system';
import Icon from './Icon';
import Text from './Text';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
};

const defaultProps = {
  className: '',
  title: '',
  onClick: () => {},
  onMouseEnter: () => {},
};

function IconTile({ className, name, title, onClick, onMouseEnter }) {
  return (
    <Flex
      className={className}
      is="button"
      title={title}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <Icon name={name} />
      <Text ml={4} fontSize={2}>
        {name}
      </Text>
    </Flex>
  );
}

IconTile.propTypes = propTypes;
IconTile.defaultProps = defaultProps;

export default withSystem(
  styled(IconTile)`
    outline: none;
  `,
  [width, space, color, borderRadius, shadow, hover, focus],
  {
    width: 1,
    p: 5,
    bg: 'gray.0',
    borderRadius: 1,
    hover: {
      backgroundColor: 'white',
      boxShadow: 'medium',
    },
    focus: {
      boxShadow: 'outline',
    },
  }
);
