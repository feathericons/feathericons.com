import { icons } from 'feather-icons'
import Fuse from 'fuse.js'
import React from 'react'

function useSearch(query) {
  const [results, setResults] = React.useState(Object.values(icons))

  const fuse = new Fuse(Object.values(icons), {
    threshold: 0.4,
    keys: ['name', 'tags'],
  })

  React.useEffect(
    () => {
      if (query.trim()) {
        setResults(fuse.search(query.trim()))
      } else {
        setResults(Object.values(icons))
      }
    },
    [query],
  )

  return results
}

export default useSearch
