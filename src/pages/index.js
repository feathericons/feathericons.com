import { icons } from 'feather-icons'
import React from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import Layout from '../components/Layout'
import NoResults from '../components/NoResults'
import SearchInput from '../components/SearchInput'
import useSearch from '../utils/useSearch'

function IndexPage() {
  const [query, setQuery] = useQueryParam('query', StringParam)
  const results = useSearch(query || '')

  return (
    <Layout>
      <Hero />
      <SearchInput
        placeholder={`Search ${
          Object.keys(icons).length
        } icons (Press "/" to focus)`}
        value={query || ''}
        onChange={event => setQuery(event.target.value)}
        css={{
          position: 'sticky',
          top: 0,
        }}
      />
      {results.length > 0 ? (
        <IconGrid icons={results} />
      ) : (
        <NoResults query={query} />
      )}
      <Footer />
    </Layout>
  )
}

export default IndexPage
