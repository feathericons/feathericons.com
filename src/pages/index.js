/** @jsx jsx */
import { get } from '@styled-system/css'
import { icons } from 'feather-icons'
import { rgba } from 'polished'
import { parse } from 'serialize-query-params'
import { jsx } from 'theme-ui'
import { StringParam, useQueryParam } from 'use-query-params'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IconGrid from '../components/IconGrid'
import Layout from '../components/Layout'
import NoResults from '../components/NoResults'
import SearchInput from '../components/SearchInput'
import Sidebar from '../components/Sidebar'
import useSearch from '../utils/useSearch'

// TODO: Remove `g` and `alpha` if `alpha` is added to @theme-ui/color.
// Reference: https://github.com/system-ui/theme-ui/pull/441
const g = (t, c) =>
  get(t, `colors.${c}`, c)
    .replace(/^var\(--(\w+)(.*?), /, '')
    .replace(/\)/, '')

const alpha = (c, n) => t => rgba(g(t, c), n)

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
          gridTemplateColumns: [null, null, '1fr 360px'],
          gridAutoFlow: 'dense',
          paddingX: 2,
        }}
      >
        <div
          sx={{
            gridColumn: [null, null, 2],
            position: [null, null, 'sticky'],
            top: 0,
            maxHeight: [null, null, '100vh'],
            overflow: 'auto',
          }}
        >
          <Sidebar />
        </div>
        <div>
          <div
            sx={{
              position: 'sticky',
              top: 0,
              paddingY: 5,
              paddingX: 4,
              background: theme =>
                `linear-gradient(${theme.colors.muted} 50%, ${alpha(
                  'muted',
                  0,
                )(theme)})`,
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
          <div sx={{ paddingX: 4 }}>
            {results.length > 0 ? (
              <IconGrid icons={results} />
            ) : (
              <NoResults query={query} />
            )}
          </div>
          <div sx={{ paddingY: 5, paddingX: 4 }}>
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
