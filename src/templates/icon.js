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
  const svg = icons[name].toSvg();

  return (
    <div>
      <Helmet>
        <title>{name} | Feather</title>
      </Helmet>
      <h1>{name}</h1>
      <div>
        <Icon name={name} size={24 * 8} color="gray.9" />
      </div>
      <pre>
        <code>{svg}</code>
      </pre>
      <button onClick={() => download(svg, `${name}.svg`, 'image/svg+xml')}>
        Download
      </button>
      <pre>
        <code>{`<i data-feather="${name}"></i>`}</code>
      </pre>
      <pre>
        <code>
          {
            '<script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>\n<script>\n  feather.replace();\n</script>'
          }
        </code>
      </pre>
    </div>
  );
}

IconTemplate.propTypes = propTypes;

export default IconTemplate;
