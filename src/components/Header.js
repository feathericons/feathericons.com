import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Box } from 'grid-styled';
import { space, borderWidth, borderColor } from 'styled-system';

import withSystem from '../utils/with-system';
import version from '../utils/version';
import Text from './Text';
import Container from './Container';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Header({ className }) {
  return (
    <Box className={className}>
      <Container>
        <Text is={Link} to="/" fontSize={4}>
          Feather <Text>v{version}</Text>
        </Text>
      </Container>
    </Box>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withSystem(Header, [space, borderWidth, borderColor], {
  py: 4,
  borderBottom: true,
  borderWidth: 1,
  borderColor: 'gray.2',
});
