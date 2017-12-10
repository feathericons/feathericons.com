import { flatten } from 'lodash';
import { propTypes } from 'styled-system';
import tag from 'tag-hoc';

const propsToRemove = [
  ...flatten(Object.keys(propTypes).map(key => Object.keys(propTypes[key]))),
  'lineHeight',
];

export default tag(propsToRemove);
