import styled from 'styled-components';
import { Text } from 'rebass';
import { textAlign } from 'styled-system';

import lineHeight from '../utils/line-height';

export default styled(Text)`
  ${textAlign};
  ${lineHeight};
`;
