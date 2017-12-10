import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-css-grid';
import { width, space } from 'styled-system';
import download from 'downloadjs';

import withSystem from '../utils/with-system';
import IconTile from './IconTile';

const propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function IconGrid({ className, icons }) {
  return (
    <Grid className={className} width={224} gap={16}>
      {icons.map(icon => (
        <IconTile
          key={icon.name}
          name={icon.name}
          title={`Download ${icon.name}.svg`}
          onClick={() =>
            download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
          }
        />
      ))}
    </Grid>
  );
}

IconGrid.propTypes = propTypes;
IconGrid.defaultProps = defaultProps;

export default withSystem(IconGrid, [width, space]);
