function kebabToCamelKeys(object) {
  return Object.keys(object).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [kebabToCamel(key)]: object[key],
    }),
    {}
  );
}

function kebabToCamel(string) {
  return string
    .split('-')
    .map(
      (word, index) =>
        index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join('');
}

export default kebabToCamelKeys;
