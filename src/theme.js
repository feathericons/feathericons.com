const space = [0, 4, 8, 12, 16, 24, 32, 64];

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
};

const colors = {
  primary: '#08f',
  black: '#000',
  white: '#fff',
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
};

const shadows = {
  none: 'none',
  small: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)',
  medium: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)',
  outline: `0 0 0 3px ${colors.primary}`,
};

const radii = [0, 2, 4, 8];

export default {
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  shadows,
  radii,
};
