/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components'
import { fonts, colors } from './theme'

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
    color: ${colors.white};
    background-color: ${colors.base};
  }

  ::-moz-selection {
    color: ${colors.white};
    background-color: ${colors.base};
  }
`
