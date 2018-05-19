import styled from 'styled-components'
import { Input } from 'rebass'

import { shadows } from '../theme'

export default styled(Input)`
  box-shadow: ${shadows.small};

  &:focus {
    box-shadow: ${shadows.outline};
  }
`
