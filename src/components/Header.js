import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { space, borderWidth, borderColor } from 'styled-system';

import version from '../utils/version';
import withSystem from '../utils/with-system';

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
    <div className={className}>
      <Container>
        <Text is={Link} to="/" fontSize={4}>
          Feather <Text color="gray.6">v{version}</Text>
        </Text>
      </Container>
    </div>
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
