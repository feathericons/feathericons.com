import Fuse from 'fuse.js';

function search(list, value, options) {
  if (!value) {
    return list;
  }

  const fuse = new Fuse(list, {
    threshold: 0.4,
    ...options,
  });

  return fuse.search(value.trim());
}

export default search;
