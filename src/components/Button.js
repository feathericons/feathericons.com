import {
  space,
  fontSize,
  borderWidth,
  borderRadius,
  color,
  textAlign,
} from 'styled-system';

import withSystem from '../utils/with-system';
import cleanElement from '../utils/clean-element';
import lineHeight from '../utils/line-height';

export default withSystem(
  cleanElement('button'),
  [space, fontSize, lineHeight, textAlign, color, borderWidth, borderRadius],
  {
    px: 5,
    py: 4,
    fontSize: 2,
    lineHeight: 'none',
    align: 'center',
    bg: 'primary',
    color: 'white',
    borderRadius: 2,
    borderWidth: 0,
  }
);
