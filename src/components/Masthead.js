import React from 'react';
import PropTypes from 'prop-types';
import { space } from 'styled-system';
import { Box, Flex } from 'grid-styled';

import withSystem from '../utils/with-system';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import stdlibLogo from '../assets/stdlib-logo.svg';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Masthead({ className }) {
  return (
    <Flex className={className} direction="column" align="center">
      <Heading align="center" mt={0} mb={5}>
        Simply beautiful open source icons
      </Heading>
      <Flex width={[1, 'auto']} direction={['column', 'row']}>
        <Button
          is="a"
          href="https://github.com/feathericons/feather#feather"
          mx={[0, 2]}
          my={[2, 0]}
        >
          Get Started
        </Button>
        <Button mx={[0, 2]} my={[2, 0]} bg="gray.1" color="gray.7">
          Download
        </Button>
      </Flex>
      <Box is="a" href="https://stdlib.com/" target="_blank" mt={[6, 6]}>
        <Text color="gray.6">Sponsored by</Text>
        <Box is="img" src={stdlibLogo} mt={1} />
      </Box>
    </Flex>
  );
}

Masthead.propTypes = propTypes;
Masthead.defaultProps = defaultProps;

export default withSystem(Masthead, [space]);
