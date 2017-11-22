import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  pathContext: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

function IconTemplate({ pathContext }) {
  return <h1>{pathContext.name}</h1>;
}

IconTemplate.propTypes = propTypes;

export default IconTemplate;
