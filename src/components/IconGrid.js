import React from 'react';
import PropTypes from 'prop-types';
import download from 'downloadjs';
import { Flex, Box } from 'rebass';

import logDownload from '../utils/log-download';
import IconTile from './IconTile';

const propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function IconGrid({ icons }) {
  return (
    <Flex wrap mx={-2}>
      {icons.map(icon => (
        <Box p={2} w={[1, 1 / 2, 1 / 3, 1 / 4]}>
          <IconTile
            key={icon.name}
            name={icon.name}
            w={1}
            title={`Download ${icon.name}.svg`}
            onClick={() => {
              download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml');
              logDownload(icon.name);
            }}
          />
        </Box>
      ))}
    </Flex>
  );
}

IconGrid.propTypes = propTypes;

export default IconGrid;
