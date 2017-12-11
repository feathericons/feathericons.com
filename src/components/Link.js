import styled from 'styled-components';
import { Link } from 'rebass';

import { colors } from '../theme';

export default styled(Link)`
  color: ${colors.gray9};
  transition: color 0.1s ease-in;

  &:hover {
    color: ${colors.base};
  }
`;
