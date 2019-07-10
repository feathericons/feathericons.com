import { icons } from 'feather-icons'
import React from 'react'
import { parse } from 'serialize-query-params'
import { StringParam, useQueryParam } from 'use-query-params'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import Layout from '../components/Layout'
import NoResults from '../components/NoResults'
import SearchInput from '../components/SearchInput'
import theme from '../theme'
import useSearch from '../utils/useSearch'

function IndexPage({ location }) {
  const [query, setQuery] = useQueryParam(
    'query',
    StringParam,
    parse(location.search),
  )
  const results = useSearch(query || '')

  return (
    <Layout>
      <Hero />
      <div
        css={{
          position: 'sticky',
          top: 0,
          background: `linear-gradient(0deg, transparent, ${
            theme.colors.gray[0]
          })`,
        }}
      >
        <Container>
          <SearchInput
            placeholder={`Search ${
              Object.keys(icons).length
            } icons (Press "/" to focus)`}
            value={query || ''}
            onChange={event => setQuery(event.target.value)}
          />
        </Container>
      </div>
      <Container>
        {results.length > 0 ? (
          <IconGrid icons={results} />
        ) : (
          <NoResults query={query} />
        )}
      </Container>
      <Footer />
    </Layout>
  )
}

export default IndexPage
