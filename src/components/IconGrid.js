import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'feather-icons';
import Grid from 'react-css-grid';
import { width, space } from 'styled-system';

import withSystem from '../utils/with-system';
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
      {Object.keys(icons).map(name => <IconTile key={name} name={name} />)}
    </Grid>
  );
}

IconGrid.propTypes = propTypes;
IconGrid.defaultProps = defaultProps;

export default withSystem(IconGrid, [width, space]);
