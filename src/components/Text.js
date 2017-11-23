import { space, fontSize, fontWeight, color } from 'styled-system';

import lineHeight from '../utils/line-height';
import withSystem from '../utils/with-system';

export default withSystem(
  'span',
  [space, fontSize, fontWeight, lineHeight, color],
  { fontSize: 2, lineHeight: 'normal', color: 'gray.7' }
);
