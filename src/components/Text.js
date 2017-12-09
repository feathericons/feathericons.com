import { space, fontSize, fontWeight, textAlign, color } from 'styled-system';

import withBase from '../utils/with-base';
import lineHeight from '../utils/line-height';
import withSystem from '../utils/with-system';

export default withSystem(
  withBase('span'),
  [space, fontSize, fontWeight, lineHeight, textAlign, color],
  { fontSize: 2, lineHeight: 'normal', color: 'gray.7' }
);
