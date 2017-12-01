import Fuse from 'fuse.js';

function search(options, list, searchValue) {
  const fuse = new Fuse(list, {
    threshold: 0.5,
    ...options,
  });

  return fuse.search(searchValue.trim());
}

export default search;
