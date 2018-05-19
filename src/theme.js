const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512]

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const weights = [400, 500]

const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}

const colors = {
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

const shadows = {
  none: 'none',
  small: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
  outline: `0 0 0 3px ${colors.base}`,
}

const radius = 4

export default {
  space,
  font,
  weights,
  lineHeights,
  colors,
  shadows,
  radius,
}
