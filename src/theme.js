export const breakpoints = ['32em', '48em', '64em', '80em']

export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512]

export const fonts = {
  sans: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Roboto"',
    '"Oxygen"',
    '"Ubuntu"',
    '"Cantarell"',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'sans-serif',
  ].join(', '),
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const fontWeights = { normal: 400, medium: 500 }

export const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}

export const colors = {
  base: '#06f',
  black: '#000',
  white: '#fff',

  // Grays generated with palx (https://palx.jxnblk.com/) using a base of #06f
  gray0: '#f8f9fa',
  gray1: '#ebedf0',
  gray2: '#dee0e5',
  gray3: '#cfd3d9',
  gray4: '#bec4cc',
  gray5: '#acb3be',
  gray6: '#97a0ae',
  gray7: '#7f899a',
  gray8: '#626c7d',
  gray9: '#393f49',
}

export const radii = [0, 6]

export default {
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  radii,
}
