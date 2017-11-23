import { space, fontSize, fontWeight, color, style } from 'styled-system';

import withSystem from '../utils/withSystem';

const lineHeight = style({
  prop: 'lineHeight',
  cssProperty: 'lineHeight',
  key: 'lineHeights',
});

export default withSystem(
  'span',
  [space, fontSize, fontWeight, lineHeight, color],
  { fontSize: 2, lineHeight: 'normal', color: 'gray.7' }
);
