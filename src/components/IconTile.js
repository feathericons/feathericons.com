import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Flex, Truncate } from 'rebass';

import { colors, shadows } from '../theme';
import Icon from './Icon';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const IconButton = styled(Button)`
  cursor: pointer;
  text-align: left;
  line-height: 1.5;

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
        <Truncate ml={4} fontSize={2}>
          {name}
        </Truncate>
      </Flex>
    </IconButton>
  );
}

IconTile.propTypes = propTypes;

export default IconTile;
