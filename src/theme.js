import palx from 'palx';

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
  colors,
};
