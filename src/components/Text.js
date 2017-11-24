import { space, fontSize, fontWeight, color } from 'styled-system';

import generateBase from '../utils/generate-base';
import lineHeight from '../utils/line-height';
import withSystem from '../utils/with-system';

export default withSystem(
  generateBase('span'),
  [space, fontSize, fontWeight, lineHeight, color],
  { fontSize: 2, lineHeight: 'normal', color: 'gray.7' }
);
