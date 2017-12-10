import { space, fontSize, fontWeight, textAlign, color } from 'styled-system';

import withSystem from '../utils/with-system';
import cleanElement from '../utils/clean-element';
import lineHeight from '../utils/line-height';

export default withSystem(
  cleanElement('span'),
  [space, fontSize, fontWeight, lineHeight, textAlign, color],
  { fontSize: 2, lineHeight: 'normal', color: 'gray.7' }
);
