import React from 'react';
import PropTypes from 'prop-types';

import { icons } from 'feather-icons';
import { Box } from 'grid-styled';
import { space, borderWidth, borderColor } from 'styled-system';

import withSystem from '../utils/with-system';
import Container from './Container';
import Search from './Search';
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
        <Link to="/" fontSize={4} color="gray.8">
          Feather <Version fontSize={1} color="gray.6" />
        </Link>
        <Search
          mt={4}
          items={Object.values(icons)}
          keys={['name', 'tags']}
          onChange={selectedItem => console.log(selectedItem)}
        />
      </Container>
    </Box>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withSystem(Header, [space, borderWidth, borderColor], {
  pt: 4,
  pb: 5,
  borderBottom: true,
  borderWidth: 1,
  borderColor: 'gray.2',
});
