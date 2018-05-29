/* eslint-disable no-unused-expressions */
import { rgba } from 'polished'
import { injectGlobal } from 'styled-components'
import { colors, fonts } from './theme'

injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: ${fonts.sans};
  }

  a {
    text-decoration: none;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  ::selection {
    background-color: ${rgba(colors.base, 1 / 4)};
  }

  ::-moz-selection {
    background-color: ${rgba(colors.base, 1 / 4)};
  }
`
