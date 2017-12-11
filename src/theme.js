import palx from 'palx';

export const space = [0, 4, 8, 12, 16, 24, 32, 64];

const weights = [400, 500];

const palette = palx('#08f');

const flattened = Object.keys(palette).reduce((accumlator, key) => {
  const value = palette[key];

  if (Array.isArray(value)) {
    accumlator[key] = value[5];
    value.forEach((element, i) => {
      accumlator[key + i] = element;
    });
  } else {
    accumlator[key] = value;
  }

  return accumlator;
}, {});

export const colors = {
  black: '#000',
  white: '#fff',
  ...flattened,
};

export default {
  space,
  weights,
  colors,
};
