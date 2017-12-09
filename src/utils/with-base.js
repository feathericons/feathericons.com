import { flatten } from 'lodash';
import { propTypes } from 'styled-system';
import tag from 'tag-hoc';

const propsToRemove = [
  ...flatten(Object.keys(propTypes).map(key => Object.keys(propTypes[key]))),
  'lineHeight',
];

const Tag = tag(propsToRemove);

function withBase(Component) {
  return Tag(Component);
}

export default withBase;
