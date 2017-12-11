import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Flex, Text } from 'rebass';

import { colors, shadows } from '../theme';
import Icon from './Icon';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const IconButton = styled(Button)`
  cursor: pointer;

  &:hover {
    background-color: ${colors.white};
    box-shadow: ${shadows.medium};
  }

  &:focus {
    box-shadow: ${shadows.outline};
  }
`;

function IconTile({ name, ...props }) {
  return (
    <IconButton px={5} py={5} color="gray9" bg="gray0" {...props}>
      <Flex align="center">
        <Icon name={name} />
        <Text ml={4} fontSize={2}>
          {name}
        </Text>
      </Flex>
    </IconButton>
  );
}

IconTile.propTypes = propTypes;

export default IconTile;
