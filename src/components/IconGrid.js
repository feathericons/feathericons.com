import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-css-grid';
import download from 'downloadjs';

import trackDownload from '../utils/track-download';
import IconTile from './IconTile';

const propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function IconGrid({ icons }) {
  return (
    <Grid width={224} gap={16}>
      {icons.map(icon => (
        <IconTile
          key={icon.name}
          name={icon.name}
          title={`Download ${icon.name}.svg`}
          onClick={() => {
            download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml');
            trackDownload(icon.name);
          }}
        />
      ))}
    </Grid>
  );
}

IconGrid.propTypes = propTypes;

export default IconGrid;
