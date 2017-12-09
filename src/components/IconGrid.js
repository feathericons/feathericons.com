import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-css-grid';
import { width, space } from 'styled-system';
import { Box } from 'grid-styled';
import Link from 'gatsby-link';

import withSystem from '../utils/with-system';
import IconTile from './IconTile';

const propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function IconGrid({ className, icons }) {
  return (
    <Grid className={className} width={224} gap={16}>
      {icons.map(name => (
        <Box is={Link} key={name} to={`/icon/${name}`}>
          <IconTile
            name={name}
            bg="gray.0"
            borderRadius={1}
            hover={{
              backgroundColor: 'white',
              boxShadow: 'medium',
            }}
          />
        </Box>
      ))}
    </Grid>
  );
}

IconGrid.propTypes = propTypes;
IconGrid.defaultProps = defaultProps;

export default withSystem(IconGrid, [width, space]);
