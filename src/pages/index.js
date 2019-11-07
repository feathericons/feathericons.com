/** @jsx jsx */
import { icons } from 'feather-icons'
import { parse } from 'serialize-query-params'
import { jsx } from 'theme-ui'
import { StringParam, useQueryParam } from 'use-query-params'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import Layout from '../components/Layout'
import NoResults from '../components/NoResults'
import SearchInput from '../components/SearchInput'
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
      <Container
        sx={{
          position: 'sticky',
          top: 0,
          boxShadow: theme => `inset 0 16px 16px ${theme.colors.gray[0]}`,
          zIndex: 1,
        }}
      >
        <SearchInput
          placeholder={`Search ${
            Object.keys(icons).length
          } icons (Press "/" to focus)`}
          value={query || ''}
          onChange={event => setQuery(event.target.value)}
        />
      </Container>
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
