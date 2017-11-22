import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { icons } from 'feather-icons';
import download from 'downloadjs';

import Icon from '../components/Icon';

const propTypes = {
  pathContext: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

function IconTemplate({ pathContext: { name } }) {
  return (
    <div>
      <Helmet>
        <title>{name} | Feather</title>
      </Helmet>
      <h1>{name}</h1>
      <div>
        <Icon name={name} width={24 * 6} height={24 * 6} />
      </div>
      <button
        onClick={() =>
          download(icons[name].toSvg(), `${name}.svg`, 'image/svg+xml')
        }
      >
        Download
      </button>
    </div>
  );
}

IconTemplate.propTypes = propTypes;

export default IconTemplate;
