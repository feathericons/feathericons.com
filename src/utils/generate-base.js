import React from 'react';
import { removeProps } from 'styled-system';

function generateBase(Component) {
  return props => React.createElement(Component, removeProps(props));
}

export default generateBase;
