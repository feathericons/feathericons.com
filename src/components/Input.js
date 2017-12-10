import styled from 'styled-components';
import {
  space,
  width,
  fontSize,
  color,
  borderRadius,
  boxShadow,
  focus,
} from 'styled-system';

import withSystem from '../utils/with-system';
import cleanElement from '../utils/clean-element';

const Input = styled(cleanElement('input'))`
  font-family: inherit;
  appearance: none;
  border: none;
  outline: 0;
`;

export default withSystem(
  Input,
  [space, width, fontSize, color, borderRadius, boxShadow, focus],
  {
    width: 1,
    p: 4,
    fontSize: 2,
    color: 'gray.7',
    bg: 'transparent',
    borderRadius: 1,
    boxShadow: 'small',
    focus: {
      boxShadow: 'outline',
    },
  }
);
