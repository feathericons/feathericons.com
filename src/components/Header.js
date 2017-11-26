import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { space, borderWidth, borderColor } from 'styled-system';

import withSystem from '../utils/with-system';
import Container from './Container';
import Link from './Link';
import Version from './Version';

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
        <Link to="/" fontSize={3} fontWeight="medium">
          Feather <Version fontSize={1} fontWeight="light" />
        </Link>
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
