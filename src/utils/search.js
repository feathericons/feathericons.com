import Fuse from 'fuse.js';

function search(list, searchValue, options) {
  const fuse = new Fuse(list, {
    threshold: 0.5,
    ...options,
  });

  return fuse.search(searchValue.trim());
}

export default search;
