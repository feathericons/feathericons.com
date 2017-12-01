import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'feather-icons';
import Grid from 'react-css-grid';
import { width, space } from 'styled-system';

import withSystem from '../utils/with-system';
import Link from './Link';
import IconTile from './IconTile';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function IconGrid({ className }) {
  return (
    <Grid className={className} width={224} gap={16}>
      {Object.keys(icons).map(name => (
        <Link to={`icon/${name}`}>
          <IconTile
            key={name}
            name={name}
            bg="gray.0"
            borderRadius={1}
            hover={{
              backgroundColor: 'white',
              boxShadow: 2,
            }}
          />
        </Link>
      ))}
    </Grid>
  );
}

IconGrid.propTypes = propTypes;
IconGrid.defaultProps = defaultProps;

export default withSystem(IconGrid, [width, space]);
