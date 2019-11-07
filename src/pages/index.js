/** @jsx jsx */
import { icons } from 'feather-icons'
import { parse } from 'serialize-query-params'
import { jsx } from 'theme-ui'
import { StringParam, useQueryParam } from 'use-query-params'
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
      <div
        sx={{
          display: 'grid',
          gridGap: 6,
          paddingY: 4,
          paddingX: 5,
          mx: 'auto',
          maxWidth: 1200,
        }}
      >
        <div
          sx={{
            position: 'sticky',
            top: 0,
            paddingTop: 4,
            boxShadow: theme => `inset 0 16px 16px ${theme.colors.muted}`,
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
        </div>
        {results.length > 0 ? (
          <IconGrid icons={results} />
        ) : (
          <NoResults query={query} />
        )}
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
